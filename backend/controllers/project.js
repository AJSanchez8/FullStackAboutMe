
const project = require('../models/project');
var Project = require('../models/project');

var controller = {


    home: function(req, res){
        return res.status(200).send({
            message: "Soy la página home"
        });
    },

    test: function(req, res){
        return res.status(200).send({
            message: "Soy el método o acción test del controlador de project"
        });
    },

    saveProject: function(req, res){
        var project = new Project();
        var params = req.body;

        project.name = params.name;
        project.description = params.description;
        project.category = params.category;
        project.year = params.year;
        project.langs = params.langs;
        project.image = null;

        project.save()
                .then((projectStored)=> {
                    res.status(200).send({project:projectStored});
                })
                .catch((err)=>{
                res.status(510).send({message: "Error al guardar el documento"});
                });
    },

 
    getProject: async function (req, res) {
        var projectId = req.params.id;
      
        if (projectId == null) return res.status(404).send({message: "El proyecto no existe"});
      
        try {
          const project = await Project.findById(projectId);
          if (!project) return res.status(404).send({message: "El proyecto no existe"});
          return res.status(200).send({project});
        } catch (err) {
          return res.status(500).send({message: "Error al devolver los datos"});
        }
      }, 

      // Ordenados por año
      getProjects: async function(req, res) {
        try {
          const projects = await Project.find({}).sort('year').exec();
          if (projects.length === 0) {
            return res.status(404).send({ message: "No se encontraron proyectos" });
          }
          return res.status(200).send({ projects });
        } catch (err) {
          return res.status(500).send({ message: "Error al devolver los datos" });
        }
      },

      updateProject: function(req, res){
        var projectId = req.params.id;
        var update = req.body;

        Project.findByIdAndUpdate(projectId, update, {new:true})
                                  .then((projectUpdate)=>{
                                    return res.status(200).send({ project: projectUpdate });
                                  })
                                  .catch(()=>{
                                    return res.status(404).send({ message: "No se encontraron proyectos" });
                                  })

      },

      deleteProject: function(req, res){
        var projectId = req.params.id;
        var deletePro = req.body;

        Project.findByIdAndDelete(projectId, deletePro, {new:true})
                                .then((projectDel)=>{
                                  return res.status(200).send({ project: projectDel });
                                })
                                .catch(()=>{
                                  return res.status(404).send({ message: "No se encontraron proyectos" });
                                })
      },
      uploadImage: async function(req,res){
        var projectId = req.params.id;
        var fileName = 'imagen no subida...';
 
        if(req.files){
            var filesPath = req.files.image.path;
            var fileSplit = filesPath.split( "\\");
            var fileName = fileSplit[1];
            var extSplit = fileName.split('\.');
            var fileExt = extSplit[1];

            if(fileExt == 'png' || fileExt == 'jpg' || fileExt == 'jpeg' || fileExt == 'gif'){
            try{
         const projectUpdate = await Project.findByIdAndUpdate( 
            projectId, {image: fileName}, {new: true});
                        
                          return res.status(200).send({
                                project: projectUpdate}); 
                    } catch{
                        if(!projectUpdate) return res.status(404).send({message: 
                            fileName});
                        if(err) return res.status(500).send({message: 
                          fileName});
         
                    }
            }
          
};
       }
 }
module.exports = controller;
    