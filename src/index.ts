import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
async function main() {
  // console.log("Hello from  Prisma");
  // const result = await prisma.user.create({
  //   data: {
  //     name: "Rafsan Ahmed Raj",
  //     email: "rafsan@gmail.com",
  //   },
  // });
  // console.log(result);
  // const userData = await prisma.user.findMany({
  //   where: {
  //     id: 2,
  //   },
  // });
  // console.log(userData);
  // const findUserByID = await prisma.user.findUnique({
  //   where: {
  //     id: 3,
  //   },
  // });
  // console.log(findUserByID);

  const updateData = await prisma.user.update({
    where: {
      id: 2,
    },
    data: {
      email: "ahmed@gmail.com",
    },
  });
  console.log(updateData);
}

main();
