import { Response } from 'express';

type TJson<T> = {
  statusCode: number;
  success: boolean;
  message: string;
  data: T | null | undefined;
};
export const sendResponse = (res: Response, jsonData: any) => {
  res.status(jsonData.statusCode).json({
    statusCode: jsonData.statusCode,
    success: jsonData.success,
    message: jsonData.message,
    data: jsonData.data || null || undefined,
  });
};
