import asyncHandler from 'express-async-handler';
import { MemberServices } from './member.service';
import catchAsync from '../../shared/catchAsync';
import { RequestHandler } from 'express';
const createMember: RequestHandler = catchAsync(async (req, res) => {
  const memberData = req.body;

  const result = await MemberServices.createMemberIntoDB(memberData);

  res.status(201).json({
    success: true,
    status: 201,
    message: 'Member created successfully',
    data: result,
  });
});

const getAllMembers: RequestHandler = catchAsync(async (req, res) => {
  const result = await MemberServices.getAllMembersFromDB();
  res.status(200).json({
    success: true,
    status: 200,
    message: 'Members retrieved successfully',
    data: result,
  });
});

const getSingleMember: RequestHandler = catchAsync(async (req, res) => {
  const { memberId } = req.params;

  const result = await MemberServices.getSingleMemberFromDB(memberId);
  res.status(200).json({
    success: true,
    status: 200,
    message: 'Member retrieved successfully',
    data: result,
  });
});

const updateSingleMember: RequestHandler = catchAsync(async (req, res) => {
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

const deleteMember: RequestHandler = catchAsync(async (req, res) => {
  const { memberId } = req.params;

  const result = await MemberServices.deleteMemberFromDB(memberId);
  res.status(200).json({
    success: true,
    status: 200,
    message: 'Member deleted successfully',
    // data: result,
  });
});

export const MemberControllers = {
  createMember,
  getAllMembers,
  getSingleMember,
  updateSingleMember,
  deleteMember,
};
