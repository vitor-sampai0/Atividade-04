import courseModel from "../models/courseModel.js";

class CourseController {
  getAll = async (req, res) => {
    try {
      const courses = await courseModel.getAll();
      res.json(courses);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao buscar courses" });
    }
  };

  create = async (req, res) => {
    const { title, instrument, level, duration, price, instructor, maxStudents } = req.body;

    try {
      if (!title) {
        return res.status(400).json({ erro: "O campo 'title' é obrigatório." });
      }
      if (!instrument) {
        return res.status(400).json({ erro: "O campo 'instrument' é obrigatório." });
      }
      if (!level) {
        return res.status(400).json({ erro: "O campo 'level' é obrigatório." });
      }
      if (!duration) {
        return res.status(400).json({ erro: "O campo 'duration' é obrigatório." });
      }
      if (!price) {
        return res.status(400).json({ erro: "O campo 'price' é obrigatório." });
      }
      if (!instructor) {
        return res.status(400).json({ erro: "O campo 'instructor' é obrigatório." });
      }
      if (!maxStudents) {
        return res.status(400).json({ erro: "O campo 'maxStudents' é obrigatório." });
      }
      

      const novaCourse = await courseModel.create(title, instrument, level, duration, price, instructor, maxStudents);
      res.status(201).json(novaCourse);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao criar Curso" });
    }
  };

  update = async (req, res) => {
    const { id } = req.params;
    const { title, instrument, level, duration, price, instructor, maxStudents } = req.body;

    try {
      const courseAtualizada = await courseModel.update(
        Number(id),
        title,
        instrument,
        level,
        duration,
        price,
        instructor,
        maxStudents
      );

      if (!courseAtualizada) {
        return res.status(404).json({ erro: "Curso não encontrada!" });
      }

      res.json(courseAtualizada);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao atualizar Curso!" });
    }
  };

  delete = async (req, res) => {
    const { id } = req.params;

    try {
      const sucesso = await courseModel.delete(Number(id));

      if (!sucesso) {
        return res.status(404).json({ erro: "Curso não encontrado" });
      }

      res.status(200).send({ message: "Curso deletado com sucesso!" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erro ao excluir Curso!" });
    }
  };
  async getById(req, res) {
    try {
      const { id } = req.params;

      const course = await courseModel.findById(id);

      if (!course) {
        return res.status(404).json({ error: "Curso não encontrado" });
      }

      res.json(course);
    } catch (error) {
      console.error("Erro ao buscar Curso:", error);
      res.status(500).json({ error: "Erro ao buscar Curso" });
    }
  }

}
export default new CourseController();
