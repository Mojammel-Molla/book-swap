import { Member } from '@prisma/client';
import { prisma } from '../../shared/prisma';

const createMemberIntoDB = async (data: any) => {
  const memberData = {
    name: data.name,
    email: data.email,
    phone: data.phone,
    membershipDate: data.membershipDate,
  };
  const result = await prisma.member.create({
    data: memberData,
  });
  return result;
};

const getAllMembersFromDB = async () => {
  const result = await prisma.member.findMany();
  return result;
};

const getSingleMemberFromDB = async (memberId: string) => {
  const result = await prisma.member.findUnique({
    where: {
      memberId,
    },
  });
  return result;
};

const updateMemberIntoDB = async (
  memberId: string,
  memberData: Partial<Member>
) => {
  const result = await prisma.member.update({
    where: {
      memberId,
    },
    data: memberData,
  });
  return result;
};

const deleteMemberFromDB = async (memberId: string) => {
  const result = await prisma.member.delete({
    where: {
      memberId,
    },
  });
  return result;
};
export const MemberServices = {
  createMemberIntoDB,
  getAllMembersFromDB,
  getSingleMemberFromDB,
  updateMemberIntoDB,
  deleteMemberFromDB,
};
