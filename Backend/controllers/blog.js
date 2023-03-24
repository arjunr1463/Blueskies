const Blog = require("../models/blog");
const sharp = require("sharp");
const nodemailer = require("nodemailer");
const newsletter = require("../models/newsletter");

//create Blog
const createBlog = async (req, res) => {
  try {
    const news = await newsletter.find();
    if (!req.body.title || !req.body.content || !req.file) {
      return res.status(200).json("Please fill all fields");
    }

    const buffer = await sharp(req.file.buffer)
      .jpeg({ quality: 30 })
      .toBuffer();

    const newdata = new Blog({
      title: req.body.title,
      content: req.body.content,
      image: {
        data: buffer,
        contentType: req.file.mimetype,
      },
    });

    await newdata.save();
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.Email,
        pass: process.env.Email_Pass,
      },
    });
    const emailList = news.map((item) => item.email);
    const mailOptions = {
      from: process.env.Email_From,
      to: emailList.join(","),
      subject: "New Blog Created",
      html: `
         <br/>
          <p>We have created a new blog of ${req.body.title}.Please check it out</p>
         <br/>
         <br/>
          <p>Check it Out!!!</p>
         <br/>
         <a href="${process.env.CLIENT_URL}/OurBlogs">${process.env.CLIENT_URL}/OurBlogs</a>
         <p>Best regards,</p>
         <p>Modelopedia</p>
    `,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
    return res.status(201).json("Blog created successfully!!!");
  } catch (error) {
    console.error(error);
    return res.status(500).json("Something went wrong");
  }
};

//getBlog
const getBlog = async (req, res) => {
  try {
    const findBlog = await Blog.find();
    res.json(findBlog);
  } catch {
    res.json("Something went wrong");
  }
};

const adminBlogInactive = async (req, res) => {
  try {
    const member = await Blog.findByIdAndUpdate(
      req.params.id,
      { status: "Inactive" },
      { new: true }
    );
    if (member) {
      res.json("Success");
    } else {
      res.json("Blog member not found");
    }
  } catch (error) {
    console.log(error);
    res.json("Failed");
  }
};

//Adminactive
const adminBlogActive = async (req, res) => {
  try {
    const member = await Blog.findByIdAndUpdate(
      req.params.id,
      { status: "Active" },
      { new: true }
    );
    if (member) {
      res.json("Success");
    } else {
      res.json("Blog member not found");
    }
  } catch (error) {
    console.log(error);
    res.json("Failed");
  }
};

//AdminDelete
const adminBlogDelete = async (req, res) => {
  try {
    const user = await Blog.findByIdAndDelete(req.params.id);
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Unable to delete user." });
  }
};

//Adminedit
const adminBlogEdit = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedUser = req.body;
    if (req.file) {
      const { buffer, mimetype } = req.file;
      const compressedImage = await sharp(buffer)
        .resize(800)
        .jpeg({ quality: 30 })
        .toBuffer();
      updatedUser.image = {
        data: compressedImage,
        contentType: mimetype,
      };
    }
    Blog.findByIdAndUpdate(id, updatedUser, { new: true }).then((user) => {
      res.json(user);
    });
  } catch {
    res.json("Failed");
  }
};

const createComment = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ error: 'Blog not found' });
    }
    const { name, email, comment } = req.body;
    if (!name || !email || !comment) {
      return res.status(200).json({ message: 'Please fill all the required fields' });
    }
    const newComment = {
      name,
      email,
      comment,
      website: req.body.website
    };
    const isDuplicate = blog.comments.some(comment => {
      return (
        comment.name === newComment.name &&
        comment.email === newComment.email &&
        comment.comment === newComment.comment
      );
    });
    if (isDuplicate) {
      return res.status(400).json({ error: 'Duplicate comment' });
    }
    blog.comments.push(newComment);
    await blog.save();
    res.json({ message: 'Comment added successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
}


const getComments = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ error: 'Blog not found' });
    }
    const comments = blog.comments;
    res.json({ comments });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
}
module.exports = {
  createBlog,
  getBlog,
  adminBlogActive,
  adminBlogDelete,
  adminBlogInactive,
  adminBlogEdit,
  createComment,
  getComments,
};
