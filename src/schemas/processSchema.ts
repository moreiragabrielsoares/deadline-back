import JoiImport from "joi";
import DateExtension from "@joi/date";
const joi = JoiImport.extend(DateExtension) as typeof JoiImport;
import { INewProcess, IProcessId } from "../types/processTypes";

export const processSchema = joi.object<INewProcess>({
  processNumber: joi.string().required(),
  task: joi.string(),
  deadline: joi.date().format("YYYY-MM-DD").required(),
  priorityId: joi.number().integer().required(),
});

export const processIdSchema = joi.object<IProcessId>({
  id: joi.number().integer().required(),
});
