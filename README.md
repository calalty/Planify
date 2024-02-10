![image](https://github.com/calalty/Planify/assets/64406113/999a68af-dbb7-42d7-9ee7-739fe540d820)

## Deployed on Vercel 🚀

https://planify-mocha.vercel.app/

## Technical Skills 👨‍💻

 ![appwrite](https://github.com/calalty/Planify/assets/64406113/9248d010-9271-40b4-980a-dba75b661e68) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) ![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white) ![image](https://github.com/calalty/Planify/assets/64406113/a4e196ac-e0c7-4aa5-baa0-7eb8e4180b49)


## What did I do? 🤔

🎯 I firstly followed along to [Sonny Sanghas Trello Tutorial](https://www.youtube.com/watch?v=TI2AvfCj5oM) to understand how i can: integrate Appwrite, use Zustand to update the board, and use an external package (**react-dnd**) for drag and drop functionality. 

🎯 I then took it upon myself to implement:

1. Order Value Implementation
To enhance the user experience and maintain the visual order of items after drag-and-drop actions, an "order" value was introduced in the database schema. The implementation involves mathematical calculations to update the order of todo items. This includes handling scenarios where a todo item is dragged between existing items, placed before the first item, or after the last item on the column. This ensures a seamless drag-and-drop experience, resembling Trello's behavior.

2. CRUD Operations Integration
The application now supports essential CRUD (Create, Read, Update, Delete) operations through the integration of DELETE, PATCH, and POST requests. This enables users to manipulate their task data effectively. These operations are essential for managing the lifecycle of todo items, ensuring a dynamic and responsive user interface.

## What could I improve? 🛠️

🎯 User Account Integration
To enhance personalization and security, consider implementing user account functionality using Next Auth. This would allow each user to have their personalized board with unique data associated with their account.

🎯 Board Management
Introducing the ability for users to create multiple boards. This feature provides users with the flexibility to organize tasks and information for various purposes.

🎯 Image Upload Functionality
Users could attach images to tasks or boards, providing a more comprehensive and visually appealing representation of their work.
