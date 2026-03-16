const publications = [
  {
    name: "Real-Time Tabletop Perception Pipeline for Robotic Manipulation",
    status: "Ongoing",
    abstract: `Developed a real-time RGB-D perception pipeline for tabletop object detection and localization for robotic manipulation tasks. The system integrates volumetric fusion and ESDF computation using NVBlox to support collision-aware planning. Additional components include table-plane segmentation, robot geometry filtering, and DBSCAN-based clustering to identify manipulable objects from point cloud data. The pipeline enables robust scene understanding for downstream robotic planning and interaction.`,
    links: [],
  },

  {
    name: "LEGAL-UQA: A Low-Resource Urdu-English Dataset for Legal Question Answering",
    status: "Ongoing",
    authors: ", Faizan Faisal",
    abstract: `We present LEGAL-UQA, the first Urdu legal question-answering dataset derived from Pakistan's constitution. This parallel English-Urdu dataset includes 619 question-answer pairs, each with corresponding legal article contexts, addressing the need for domain-specific NLP resources in low-resource languages. We describe the dataset creation process, including OCR extraction, manual refinement, and GPT-4-assisted translation and generation of QA pairs. Our experiments evaluate the latest generalist language and embedding models on LEGAL-UQA, with Claude-3.5-Sonnet achieving 99.19% human-evaluated accuracy. We fine-tune mt5-large-UQA-1.0, highlighting the challenges of adapting multilingual models to specialized domains. Additionally, we assess retrieval performance, finding OpenAI's text-embedding-3-large outperforms Mistral's mistral-embed. LEGAL-UQA bridges the gap between global NLP advancements and localized applications, particularly in constitutional law, and lays the foundation for improved legal information access in Pakistan.`,
    links: [
      { title: "Arxiv", link: "https://arxiv.org/abs/2410.13013" },
      {
        title: "Code",
        link: "https://github.com/nlp-anonymous-researcher/LEGAL-UQA/tree/main",
      },
      {
        title: "Dataset",
        link: "https://huggingface.co/datasets/nlp-anonymous-researcher/LEGAL-UQA",
      },
      {
        title: "Finetuned Model",
        link: "https://huggingface.co/nlp-anonymous-researcher/mt5-large-legal-uqa/tree/main",
      },
    ],
  },
  // Add more publications here
];

export default publications;
