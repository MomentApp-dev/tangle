import Joi from "joi";

export function generateCreateEventSchema() {
  return Joi.object({
    title: Joi.string(),
    description: Joi.string(),
    host: Joi.string(),
    startTime: Joi.number().integer(),
    endTime: Joi.number().integer(),
    location: Joi.string(),
    attending: Joi.array().optional(),
    notAttending: Joi.array().optional(),
    maybeAttending: Joi.array().optional(),
    isPublic: Joi.boolean(),
  }).and(
    "title",
    "description",
    "host",
    "startTime",
    "endTime",
    "location",
    "isPublic"
  );
}
