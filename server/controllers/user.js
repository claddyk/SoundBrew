import userPodcast from "../schemas/userPodcast.js";

export const uploadPodcast = async (req, res) => {
  try {

    
    console.log(imageurl)
    const podcastdata = new userPodcast({
      title: req.body.title,
      backgroundImage: req.file.path,
      description: req.body.description,
    });
    const result =await podcastdata.save();
    console.log(result)
    res.status(201).send("Podcast uploaded successfully");
  } catch (e) {
    console.log(e);
    res.status(500).send("Internal server error");
  }
};