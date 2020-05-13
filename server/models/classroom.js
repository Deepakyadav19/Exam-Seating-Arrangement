const mongoose=require('mongoose');
const schema=require('../schemas');
const classroomchema = new mongoose.Schema(schema.classroom);

class classroom{
  constructor(){
    this.model=mongoose.model('classroom',classroomchema);
  }
  
     //get the classroom of company as per criteria
      async get(criteria={},columns={}){
        return this.model.findOne(criteria, columns);
    }
    //save the newly created project 
      async save(projectObj){
        const newProject = await this.model.create(projectObj);
            return newProject;

      }
      //to count the no. of classroom as per criteria
      async count(criteria={}){
          const projectCount=await this.model.count(criteria);
          return projectCount;
         }
     //update the details of project as per criteria
      async update(criteria={},updatedProjectObj){
         return this.model.updateOne(criteria,updatedProjectObj)
      }
      //delete the project of company as per criteria 
      async delete(criteria={}){
        return this.model.deleteOne(criteria);
     }
     //display all the classroom of company
     async log(criteria={}){
          return this.model.find(criteria);
     }
     async getforsearch(criteria={}, columns={})
    {
      
      return this.model.find(criteria, columns).sort({projectName: 1});
}
  async getProject(criteria={}, columns={}){
     return this.model.find({"projectName": `/^$columns/i`}).exec(callback);
  }
  async gets(criteria={}, columns={}){
    return this.model.find(criteria, columns);
}
async getPagignation(criteria={}, columns={}){
  return this.model.find({"name": `/^$columns/i`}).exec(callback);
}
}

module.exports=new classroom();