const Vacancy = require('../models/vacancyModel');

const getAll = async (_req, res) => {
  try {
    const vacancy = await Vacancy.find();
    res.status(200).json(vacancy);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addNewvacancy = (req, res) => {
	try {
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
    const findVacancy = await Vacancy.findById(req.params.id);
      res.status(200).json(findVacancy);
  } catch (error) {
    console.log(error);
    res.status(500).json({message: error.message});
  }
}

const updateVacancy = async (req, res) => {
  try {
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
    const { id } = req.params;
    const deleteVacancy = await Vacancy.findByIdAndDelete(id);

    res.status(200).json(`The vacancy with the id ${deleteVacancy} was successfully deleted`);
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
