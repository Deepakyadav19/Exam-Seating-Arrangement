const controller = require("../controllers");
const paginator = require("../middlewares/pagination");
const employeePaginator = require("../middlewares/employee_pagination");
const authenticator = require("../middlewares/authentication");
const checkAdmin = require("../middlewares/isAdmin");
const model = require("../models");

module.exports = (app) => {
  //Login
  app.post("/api/login", controller.login);

  //Employee
  app.post(
    "/api/employee",
    [authenticator, checkAdmin],
    controller.employee.create
  );
  app.get(
    "/api/employee",
    [
      authenticator,
      checkAdmin,
      employeePaginator(model.employee.model, "employee"),
    ],
    controller.employee.index
  );
  app.get("/api/employee/:id", [authenticator], controller.employee.show);
  app.put(
    "/api/employee/:id",
    [authenticator, checkAdmin],
    controller.employee.update
  );
  app.delete(
    "/api/employee/:id",
    [authenticator, checkAdmin],
    controller.employee.delete
  );

  //Project
  app.get(
    "/api/arrangement",
    [authenticator, employeePaginator(model.arrangement.model, "arrangement")],
    controller.arrangement.index
  );
  app.post(
    "/api/arrangement",
    authenticator,
    checkAdmin,
    controller.arrangement.create
  );
  app.get(
    "/api/arrangement/:id",
    authenticator,
    checkAdmin,
    controller.arrangement.show
  );
  app.put(
    "/api/arrangement/:id",
    authenticator,
    checkAdmin,
    controller.arrangement.update
  );
  app.delete(
    "/api/arrangement/:id",
    authenticator,
    checkAdmin,
    controller.arrangement.delete
  );
};
