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

export const MemberServices = {
  createMemberIntoDB,
  getAllMembersFromDB,
};
