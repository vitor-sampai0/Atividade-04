import prisma from "../../prisma/client.js";

class CourseModel {
  getAll = async () => {
    return await prisma.course.findMany();
  };

  create = async (title, instrument, level, duration, price, instructor, maxStudents) => {
    return await prisma.course.create({
      data: {
      title,
      instrument,
      level,
      duration,
      price,
      instructor,
      maxStudents,
      },
    });
  };

  update = async (id, title, instrument, level, duration, price, instructor, maxStudents) => {
    try {
      const course = await prisma.course.update({
        where: { id },
        data: {
          title,
          instrument,
          level,
          duration,
          price,
          instructor,
          maxStudents,
        },
      });

      return course;
    } catch (error) {
      console.log("Error", error);
      throw error;
    }
  };

  delete = async (id) => {
    try {
      const courseDeletada = await prisma.course.delete({
        where: { id },
      });

      return courseDeletada;
    } catch (error) {
      console.log("Erro ao deletar o Curso!", error);
      throw error;
    }
  };
  async findById(id) {
    const courses = await prisma.course.findUnique({
      where: {
        id: Number(id),
      },            
    })
    return courses;
  }
}
export default new CourseModel();
