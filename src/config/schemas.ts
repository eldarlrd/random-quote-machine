import Joi from 'joi';

interface QuoteObject {
  quote?: string;
  author?: string;
  category?: string;
}

const quoteSchema = Joi.array().items(
  Joi.object({
    quote: Joi.string().required(),
    author: Joi.string().required(),
    category: Joi.string().required()
  })
);

export { type QuoteObject, quoteSchema };
