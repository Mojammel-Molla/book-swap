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

const getAllMembers = asyncHandler(async (req, res) => {
  const result = await MemberServices.getAllMembersFromDB();
  res.status(200).json({
    success: true,
    status: 200,
    message: 'Members retrieved successfully',
    data: result,
  });
});

const getSingleMember = asyncHandler(async (req, res) => {
  const { memberId } = req.params;

  const result = await MemberServices.getSingleMemberFromDB(memberId);
  res.status(200).json({
    success: true,
    status: 200,
    message: 'Member retrieved successfully',
    data: result,
  });
});

const updateSingleMember = asyncHandler(async (req, res) => {
  const { memberId } = req.params;
  const memberData = req.body;

  const result = await MemberServices.updateMemberIntoDB(memberId, memberData);
  res.status(200).json({
    success: true,
    status: 200,
    message: 'Member update successfully',
    data: result,
  });
});

export const MemberControllers = {
  createMember,
  getAllMembers,
  getSingleMember,
  updateSingleMember,
};
