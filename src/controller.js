import fs from "fs";

export const home = (req, res) => {
  res.render("index");
};

export const fileUpload = (req, res) => {
  const {
    file: { path }
  } = req;
  const data = fs.readFileSync(path, "utf8");
  res.render("read", { data });
};
