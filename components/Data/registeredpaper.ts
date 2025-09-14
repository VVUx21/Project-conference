export interface Paper {
  "SL. No": number;
  "Paper-ID": number;
  "Name of Author": string;
  "Title of Paper": string;
  "Author Institution": string;
}

const defaultPapers: Paper[] = [
    {
      "SL. No": 1,
      "Paper-ID": 12,
      "Name of Author": "Premanand V",
      "Title of Paper": "PSF-Aware Image Deblurring with CBAM-Infused Deep Residual Networks",
      "Author Institution": "VELLORE INSTITUTE OF TECHNOLOGY"
    },
    {
      "SL. No": 2,
      "Paper-ID": 14,
      "Name of Author": "Premanand V",
      "Title of Paper": "Comparative Study of Object Tracking Algorithms for Urban Intersection Risk Analysis Using CSRT, FairMOT, DeepSORT, and ByteTrack",
      "Author Institution": "VIT Chennai"
    },
    {
      "SL. No": 3,
      "Paper-ID": 27,
      "Name of Author": "Rudra Bhavya Harini",
      "Title of Paper": "HUFT-Net : Multi-Modal Approaches for Automated Diagnosis of Respiratory Diseases using Respiratory Sounds",
      "Author Institution": "Chaitanya Bharathi Institute of Technology, Hyderabad"
    },
    {
      "SL. No": 4,
      "Paper-ID": 27,
      "Name of Author": "Kadali Khyathi Sri Nagaveni",
      "Title of Paper": "HUFT-Net : Multi-Modal Approaches for Automated Diagnosis of Respiratory Diseases using Respiratory Sounds",
      "Author Institution": "Chaitanya Bharathi Institute of Technology, Hyderabad"
    },
    {
      "SL. No": 5,
      "Paper-ID": 46,
      "Name of Author": "Katupalli Sravyasree Samhitha ",
      "Title of Paper": "Privacy Preserving Federated Learning on Health Care Data",
      "Author Institution": "SRM Uiniversity, AP"
    },
    {
      "SL. No": 6,
      "Paper-ID": 62,
      "Name of Author": "Harshad Sheelwant",
      "Title of Paper": "Real-time Postures Detection and Monitoring at Workplaces using Pose Estimation",
      "Author Institution": "Vishwakarma Institute of Technology"
    },
    {
      "SL. No": 7,
      "Paper-ID": 75,
      "Name of Author": "Vinay Raj",
      "Title of Paper": "FedCF: A Federated Collaborative Filtering Framework for Decentralized Movie Recommendations",
      "Author Institution": "NIT Tiruchirappalli"
    },
    {
      "SL. No": 8,
      "Paper-ID": 91,
      "Name of Author": "Ayush Kumar Poddar",
      "Title of Paper": "Signature Recognition and Forgery Detection Using Image Processing Techniques",
      "Author Institution": "Dayananda Sagar Academy of Technology and Management"
    },
    {
      "SL. No": 9,
      "Paper-ID": 104,
      "Name of Author": "Tejas Mukund Bhatambarekar Adsul",
      "Title of Paper": "LiDATACR: A Novel Lightweight, Diffusion Assisted, Temporal Attention Based Cloud Removal",
      "Author Institution": "National Institute of Technology Rourkela"
    },
    {
      "SL. No": 10,
      "Paper-ID": 108,
      "Name of Author": "Mahesh R",
      "Title of Paper": "Distilling Intelligence: Deploying Lightweight Neural Networks on ESP32 for Edge AI",
      "Author Institution": "Kongunadu College of Engineering and Technology"
    },
    {
      "SL. No": 11,
      "Paper-ID": 109,
      "Name of Author": "Ketan Anand",
      "Title of Paper": "Visual-Language Grounded Closed-Loop Planning with LLMs for Embodied Agents",
      "Author Institution": "Georgia Institute of Technology"
    },
    {
      "SL. No": 12,
      "Paper-ID": 114,
      "Name of Author": "Darshan Tribhuwan Dathiya",
      "Title of Paper": "A Comparative Study of UNet and Its Variants for Breast Cancer Tumor Segmentation",
      "Author Institution": "Institute of Chemical Technology, Mumbai"
    },
    {
      "SL. No": 13,
      "Paper-ID": 122,
      "Name of Author": "Dubala Anil Kumar",
      "Title of Paper": "Classification of Real and AI-Generated Faces for Deception Detection",
      "Author Institution": "Amrita School of Engineering, Coimbatore, Amrita Vishwa Vidyapeetham, India"
    },
    {
      "SL. No": 14,
      "Paper-ID": 133,
      "Name of Author": "Pratul Kumar",
      "Title of Paper": "FRCL: A Robust Framework for Continuous Learning and Identity Retention in Face Recognition",
      "Author Institution": "Center for Development of Telematics (C-DOT)"
    },
    {
      "SL. No": 15,
      "Paper-ID": 137,
      "Name of Author": "Dr. Parikshit Saikia",
      "Title of Paper": "Improved Anomalous Activity Detection using Efficient Pre-processing and ConvLSTM",
      "Author Institution": "National Institute of Technology Silchar "
    },
    {
      "SL. No": 16,
      "Paper-ID": 144,
      "Name of Author": "ANSHU MALA KISPOTTA",
      "Title of Paper": "AI-Powered Diagnosis of Voice Disorders Using Mel-frequency feature and Machine Learning",
      "Author Institution": "Department of Electronics and Communication Engineering, Birla Institute of Technology, Mesra, Ranchi, India"
    },
    {
      "SL. No": 17,
      "Paper-ID": 148,
      "Name of Author": "SWAGATIKA MOHAPATRA",
      "Title of Paper": "Hyperparameter Tuning of Convolutional Neural Networks Using Lion Optimization Algorithm",
      "Author Institution": "KIIT Deemed to be University, Bhubaneswar, Odisha, India "
    },
    {
      "SL. No": 18,
      "Paper-ID": 159,
      "Name of Author": "Satvik Aryan",
      "Title of Paper": "Facial-Based BMI Estimation for Digital Health Monitoring Using MediaPipe and Meta-Ensemble Learning",
      "Author Institution": "IIITDM Kancheepuram"
    },
    {
      "SL. No": 19,
      "Paper-ID": 160,
      "Name of Author": "Sukanya Das",
      "Title of Paper": "Static Sign Language Recognition via Fusion of Domain-Specific Features and Hybrid Ensemble Learning",
      "Author Institution": "Indian Institute of Technology Kharagpur"
    },
    {
      "SL. No": 20,
      "Paper-ID": 162,
      "Name of Author": "Ravi Monika Sai",
      "Title of Paper": "EMD Based Hybrid Machine Learning Framework for Solar Energy Forecasting",
      "Author Institution": "Electronics and Communication Engineering, National Institute of Technology Rourkela"
    },
    {
      "SL. No": 21,
      "Paper-ID": 164,
      "Name of Author": "PRANSHU JENA",
      "Title of Paper": "BrainResMambaVision-18 An Transformative approach for Enhanced Multi-class Classification",
      "Author Institution": "National Institute of Technology Rourkela"
    },
    {
      "SL. No": 22,
      "Paper-ID": 174,
      "Name of Author": "MS. MARVI JASROTIA",
      "Title of Paper": "From Images to Insights: A Scientometric Study of Image Captioning Research from 2021 to 2025",
      "Author Institution": "Bennett University"
    },
    {
      "SL. No": 23,
      "Paper-ID": 196,
      "Name of Author": "Karthik Prasad G",
      "Title of Paper": "Enhancing Spatial Reasoning in Vision-Language Models via Monocular Depth Estimation: A Comparative Study on SpatialBench",
      "Author Institution": "Amrita Vishwa Vidyapeetham"
    },
    {
      "SL. No": 24,
      "Paper-ID": 202,
      "Name of Author": "Gunavathi C",
      "Title of Paper": "Enhanced Deep Learning Framework for Alzheimer's Detection Using Attention Mechanism: A Hybrid CNN Approach ",
      "Author Institution": "Vellore Institute of Technology, Andhra pradesh"
    },
    {
      "SL. No": 25,
      "Paper-ID": 248,
      "Name of Author": "Tilak Neema ",
      "Title of Paper": "Dak Madad: AI-Powered Platform for Enhancing Postal Operations and Delivery Efficiency",
      "Author Institution": "Acropolis Institute of Technology and Research "
    },
    {
      "SL. No": 26,
      "Paper-ID": 250,
      "Name of Author": "Krishna Pratap Singh",
      "Title of Paper": "OPTIMISED DVERGE:Disrupting Adversarial Transferability in Black-Box Attacks",
      "Author Institution": "Indian Institute of Information Technology,Allahabad"
    },
    {
      "SL. No": 27,
      "Paper-ID": 252,
      "Name of Author": "Jiljo K Moncy",
      "Title of Paper": "Decentralized Fuzzy Logic Formation Control for Multi-rotor Swarm with Virtual Leader",
      "Author Institution": "Vikram Sarabhai Space Centre "
    },
    {
      "SL. No": 28,
      "Paper-ID": 253,
      "Name of Author": "DR. HIMANSHU SHARMA",
      "Title of Paper": "GLoHi-Cap: Gated Multimodal Fusion with Spatial Object Localization for Hindi Image Captioning",
      "Author Institution": "Bennett University"
    },
    {
      "SL. No": 29,
      "Paper-ID": 254,
      "Name of Author": "P BHAVANA GOWRI",
      "Title of Paper": "Early Student Dropout Prediction using GRU-RNN",
      "Author Institution": "Department of Electronics and Communication Engineering, Vignan's Foundation for Science, Technology and Research, Vadlamudi, Guntur, AP, India-522213"
    },
    {
      "SL. No": 30,
      "Paper-ID": 261,
      "Name of Author": "Rahul Pal",
      "Title of Paper": "Uncertainty-Aware Brain Tumor Segmentation",
      "Author Institution": "UPES, Dehradun"
    },
    {
      "SL. No": 31,
      "Paper-ID": 274,
      "Name of Author": "Amruth Karun M V",
      "Title of Paper": "A Hybrid Hierarchical Approach for Long Document Topic Representation",
      "Author Institution": "Indian Institute of Information Technology Kottayam"
    },
    {
      "SL. No": 32,
      "Paper-ID": 276,
      "Name of Author": "MAHABOOB KHAN PATHAN ",
      "Title of Paper": "A Hybrid Deep Learning and Voxel-Based Morphometry Framework for Structural MRI-Based Autism Spectrum Disorder Classification ",
      "Author Institution": "Vellore Institute of Technology,Andhra pradesh"
    },
    {
      "SL. No": 33,
      "Paper-ID": 280,
      "Name of Author": "Pawan Kumar Singh",
      "Title of Paper": "E-commerce Enhancement through Intelligent Customer Interaction: Integration of GPT-Powered Chatbot With Sentiment Analysis",
      "Author Institution": "Department of Information Technology, Jadavpur University"
    },
    {
      "SL. No": 34,
      "Paper-ID": 287,
      "Name of Author": "K. V. Sridhar",
      "Title of Paper": "GPU-Enhanced Lung CT Segmentation via Chan–Vese Model and Multi-Scale Texture Analysis",
      "Author Institution": "National Institute of Technology Warangal"
    },
    {
      "SL. No": 35,
      "Paper-ID": 294,
      "Name of Author": "Deepika Vatsa",
      "Title of Paper": "Multimodal Framework for Explainable Brain Tumor Classification: Integrating Deep Learning and Large Language Models",
      "Author Institution": "Bennett University"
    },
    {
      "SL. No": 36,
      "Paper-ID": 297,
      "Name of Author": "Isha Bamel",
      "Title of Paper": "Comparative Analysis of Transformer Models for Skin Lesion Detection",
      "Author Institution": "Bharatiya Vidya Bhavan's Sardar Patel Institute of Technology"
    },
    {
      "SL. No": 37,
      "Paper-ID": 299,
      "Name of Author": "Sagar Kumar Jha",
      "Title of Paper": "A Vision Transformer Based Framework for Scalable and Interpretable Glioma Histopathology Classification",
      "Author Institution": "Indraprastha Institute of Information Technology, Delhi"
    },
    {
      "SL. No": 38,
      "Paper-ID": 300,
      "Name of Author": "Devank Rajesh Meshram ",
      "Title of Paper": "Depression Detection using Machine Learning ",
      "Author Institution": "Veermata Jijabai Technological institute Matunga Mumbai "
    },
    {
      "SL. No": 39,
      "Paper-ID": 301,
      "Name of Author": "Chamundeswari K",
      "Title of Paper": "Machine Learning Inspired Impedance Matching Prediction of Fractal Gasket Antenna",
      "Author Institution": "NIT Rourkela"
    },
    {
      "SL. No": 40,
      "Paper-ID": 302,
      "Name of Author": "Anirudha Ghosh ",
      "Title of Paper": "FairVitDMD: Fairness Assessment of Foundational Vision Transformers for Deep Manipulation Detection",
      "Author Institution": "PhD scholar, Visva Bharati "
    },
    {
      "SL. No": 41,
      "Paper-ID": 305,
      "Name of Author": "Dipayan Dewan",
      "Title of Paper": "Encoder-Decoder Refined Recurrent Transformer Network for Accelerated MRI Reconstruction",
      "Author Institution": "Indian Institute of Technology"
    },
    {
      "SL. No": 42,
      "Paper-ID": 306,
      "Name of Author": "Surbhi Raj",
      "Title of Paper": "Lightweight Audio-Visual Deepfake Detection Framework Using Tucker Decomposition and Cross-Modal MLP Mixing",
      "Author Institution": "Indian Institute of Technology Patna"
    },
    {
      "SL. No": 43,
      "Paper-ID": 317,
      "Name of Author": "Akshant Verma",
      "Title of Paper": "A Compact Transformer Based Approach for Alzheimer's Disease Diagnosis",
      "Author Institution": "Department of Computer Science and Engineering, National Institute of Technology Hamirpur"
    },
    {
      "SL. No": 44,
      "Paper-ID": 327,
      "Name of Author": "Dr. Deepika Gupta",
      "Title of Paper": "Enhancing Low-Light Images Using Retinex with Adaptive Gamma and Dark Region Denoising",
      "Author Institution": "IIIT Vadodara-International Campus Diu"
    },
    {
      "SL. No": 45,
      "Paper-ID": 333,
      "Name of Author": "Dastageer Siddiqui",
      "Title of Paper": "Benchmarking Improved Metaphor-Less Optimization Algorithms on Traveling Salesman Problem",
      "Author Institution": "KIIT Deemed to be University, Bhubaneswar, Odisha, India "
    },
    {
      "SL. No": 46,
      "Paper-ID": 349,
      "Name of Author": "MALOTHU NARESH",
      "Title of Paper": "Performance Comparison of Real-Time Image Dehazing using AOD-Net on NVIDIA Jetson Edge Devices",
      "Author Institution": "NIT WARANGAL"
    },
    {
      "SL. No": 47,
      "Paper-ID": 365,
      "Name of Author": "Shlok Pete",
      "Title of Paper": "Furnit.Ar: AI-powered Augmented Reality Interior Designing Application",
      "Author Institution": "SVKM's Dwarkadas J. Sanghvi College of Engineering"
    },
    {
      "SL. No": 48,
      "Paper-ID": 367,
      "Name of Author": "Thi Loan Bui",
      "Title of Paper": "Propagated Presence: A Bluetooth Propagation-Based Method for Automated Classroom Attendance on Mobile Devices",
      "Author Institution": "FPT University"
    },
    {
      "SL. No": 49,
      "Paper-ID": 393,
      "Name of Author": "Krishna Pratap Singh",
      "Title of Paper": "A study of fairness and bias of deep learning models",
      "Author Institution": "Indian Institute of Information Technology,Allahabad"
    },
    {
      "SL. No": 50,
      "Paper-ID": 401,
      "Name of Author": "Poornima M. Savadattimath",
      "Title of Paper": "Understanding Data Poisoning: Attack Techniques and Defense Mechanisms in Machine Learning",
      "Author Institution": "Defence Institute of Advanced Technology Pune"
    },
    {
      "SL. No": 51,
      "Paper-ID": 404,
      "Name of Author": "Hemant Singh",
      "Title of Paper": "Efficient Climate Prediction using Parallel Gaussian Process with Random Fourier Feature-Based Kernel Approximation",
      "Author Institution": "Indian Institute of Information Technology Allahabad, Prayagraj, U.P., India"
    },
    {
      "SL. No": 52,
      "Paper-ID": 406,
      "Name of Author": "Yash Sanjay Sawant",
      "Title of Paper": "Dipping Metrology: A Voxel-Based Reconstruction Framework for Arbitrary 3D Objects",
      "Author Institution": "IIT Bombay"
    },
    {
      "SL. No": 53,
      "Paper-ID": 408,
      "Name of Author": "Reethu Thota",
      "Title of Paper": "Real-Time Sign Language Recognition with CNN-Transformer Model",
      "Author Institution": "RV University"
    },
    {
      "SL. No": 54,
      "Paper-ID": 410,
      "Name of Author": "PREETHI M",
      "Title of Paper": "Enhancing model efficiency with Random Projections: Applications in deep learning",
      "Author Institution": "Defence institute of advanced technology, Pune"
    },
    {
      "SL. No": 55,
      "Paper-ID": 411,
      "Name of Author": "Tameshwari Bande",
      "Title of Paper": "Evaluating CNNs and Vision Transformers for Brain Tumor Detection: A Trade-off Between Performance and Computation",
      "Author Institution": "Delhi Technological University"
    },
    {
      "SL. No": 56,
      "Paper-ID": 419,
      "Name of Author": "Dipti Patra",
      "Title of Paper": "Enhance Net: Leveraging Facial, Speech, and Textual Cues for Multimodal Emotion Recognition",
      "Author Institution": "NIT Rourkela"
    }
  ];

export default defaultPapers;