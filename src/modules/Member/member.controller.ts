import asyncHandler from 'express-async-handler';
import { MemberServices } from './member.service';
const createMember = asyncHandler(async (req, res) => {
  const memberData = req.body;

  const result = await MemberServices.createMemberIntoDB(memberData);

  res.status(201).json({
    success: true,
    status: 201,
    message: 'Member created successfully',
    data: result,
  });
});

export const MemberControllers = {
  createMember,
};
