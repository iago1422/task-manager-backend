const Joi = require('joi');

const taskSchema = Joi.array().items(
  Joi.object({
    description: Joi.string().required(),
    responsable: Joi.string().required(),
    status: Joi.string().valid('done', 'doing', 'todo').required()
  })
);

function validateTaskInput(tasks) {
  return taskSchema.validate(tasks);
}

module.exports = { validateTaskInput };
