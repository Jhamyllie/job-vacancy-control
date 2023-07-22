const Vacancy = require('../models/vacancyModel');
const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;

const getAll = async (req, res) => {
  try {
    const authHeader = req.get("Authorization");

    if(!authHeader){
      return res.status(401).send("You forgot to pass the authorization information");
    }
    const token = authHeader.split(" ")[1];
    jwt.verify(token, 
      SECRET, 
    );
    const vacancy = await Vacancy.find()
    res.status(200).json(vacancy)
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addNewvacancy = (req, res) => {
	try {
    const authHeader = req.get("Authorization");

    if(!authHeader){
      return res.status(401).send("You forgot to pass the authorization information");
    }
    const token = authHeader.split(" ")[1];
    jwt.verify(token, 
      SECRET, 
    );
		const {
			companyName,
			jobName,
      description,
      registrationDate,
      email
		} = req.body;
    const newVacancy = new Vacancy({
      companyName,
			jobName,
      description,
      registrationDate,
      email
    });

    const savedVacancy = newVacancy.save();
    res.status(201).json({message: "New vacancy added successfully", savedVacancy});
	} catch (error) {
		console.log(error);
    res.status(500).json({message: error.message});
	}
};

const getById = async (req, res) => {
  try {
    const authHeader = req.get("Authorization");

    if(!authHeader){
      return res.status(401).send("You forgot to pass the authorization information");
    }
    const token = authHeader.split(" ")[1];
    jwt.verify(token, 
      SECRET, 
    );
    const findVacancy = await Vacancy.findById(req.params.id);
    res.status(200).json(findVacancy);
  } catch (error) {
    console.log(error);
    res.status(500).json({message: error.message});
  }
}

const updateVacancy = async (req, res) => {
  try {
    const authHeader = req.get("Authorization");

    if(!authHeader){
      return res.status(401).send("You forgot to pass the authorization information");
    }
    const token = authHeader.split(" ")[1];
    jwt.verify(token, 
      SECRET, 
    );
    const {
      companyName,
			jobName,
      description,
      registrationDate,
      email
    } = req.body;

    const update = await Vacancy.findByIdAndUpdate(req.params.id, {
      companyName,
			jobName,
      description,
      registrationDate,
      email
    });
    res.status(200).json({ message: "Vacancy successfully updated", update });
  } catch (error) {
    console.log(error);
    res.status(500).json({message: error.message});
  }
}

const deleteVacancy = async (req, res) => {
  try {
    const authHeader = req.get("Authorization");

    if(!authHeader){
      return res.status(401).send("You forgot to pass the authorization information");
    }
    const token = authHeader.split(" ")[1];
    jwt.verify(token, 
      SECRET,
      async function(erro){
        if(erro) {
          return res.status(403).send("Unauthorized access.");
        }
        const { id } = req.params;
        const deleteVacancy = await Vacancy.findByIdAndDelete(id);
        res.status(200).json({message: "Job has been successfully deleted", deleteVacancy});
      });
  } catch (error) {
    console.log(error);
    res.status(500).json({message: error.message});
  }
}

module.exports = {
  getAll,
  addNewvacancy,
  getById,
  updateVacancy,
  deleteVacancy
};
