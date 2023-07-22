const mongoose = require('mongoose');

const VacancySchema = new mongoose.Schema(
  {
    _id: { 
      type: mongoose.Schema.Types.ObjectId, 
      default: () => new mongoose.Types.ObjectId()
    },
    companyName: {
      type: String,
      isRequired: true,
    },
    jobName: {
      type: String,
      isRequired: true,
    },
    description: {
      type: String
    },
    registrationDate: {
      type: String,
      isRequired: true,
    },
    email:{
      type: String
    }
  },
  { versionKey: false },
);

const vacancy = mongoose.model('vacancy', VacancySchema);
module.exports = vacancy;
