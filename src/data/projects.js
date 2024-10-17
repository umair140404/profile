const projects = [
  {
    title: "Early Warning Detection System for Forest Fires",
    type: "Final Year Project",
    description: "",
    bulletPoints: [
      "Employed K-Shot learning on Siamese Networks to classify images into 2 categories. Achieved best accuracy of 83% and F1 score of 0.827",
      "Generated synthetic dataset using video games and Unreal Engine 4 for use in training other models",
      "Experimented using a variety of state-of-the-art models such as Deformable DETR, YOLO etc.",
      "Submitted a paper to the ICASSP Conference",
    ],
  },
  {
    title: "Sentiment Classification using BERT on GoEmotions",
    type: "NLP",
    description: "",
    bulletPoints: [
      "Multi-label sentiment classification on GoEmotions dataset using HuggingFace framework",
    ],
  },
  {
    title: "Lane Change Warning System",
    type: "Computer Vision/Machine Learning",
    description: "",
    bulletPoints: [
      "Developed a pipeline to read a dashcam video’s frames, detect vehicles using YOLOv7 and lanes using LaneNet",
      "Employed auto dynamic homography to generate a top-down view and detect any vehicles changing lanes",
    ],
  },
];

export default projects;
