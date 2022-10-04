import JoiImport from "joi";
import DateExtension from "@joi/date";
const joi = JoiImport.extend(DateExtension) as typeof JoiImport;
import { INewProcess } from "../types/processTypes";

export const processSchema = joi.object<INewProcess>({
  processNumber: joi.string().required(),
  task: joi.string(),
  deadline: joi.date().format("YYYY-MM-DD").required(),
  priorityId: joi.number().integer().required(),
});
