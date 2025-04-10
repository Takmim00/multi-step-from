


# 🧾 Multi-Step Form with Validation

A responsive, multi-step form built using **Next.js (App Router)**, **React Hook Form**, **Zod**, and **TailwindCSS**. This project includes field-level validation, navigation between steps, data summary before submission, and (optionally) simulated API submission using **React Query**.

## 🚀 Features

- ✅ Multi-step form with three steps:
  1. **Personal Information**
  2. **Address Details**
  3. **Account Setup + Summary**
- ✅ Form validation with **Zod**
- ✅ Error messages displayed under each field
- ✅ Navigation with `Next` and `Previous` buttons
- ✅ Summary of all data on the final step
- ✅ Local state handling using `useReducer`
- ✅ Responsive design using **TailwindCSS**
- ✅ (Optional) Simulated API submission using React Query
- ✅ Dark mode support (via Tailwind)

---

## 🛠️ Tech Stack

- [Next.js (App Router)](https://nextjs.org/)
- [React](https://reactjs.org/)
- [React Hook Form](https://react-hook-form.com/)
- [Zod](https://zod.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Query (TanStack Query)](https://tanstack.com/query) - *(Optional)*

---

## 📂 Project Structure

```
.
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── multi-step-form/
│       ├── Step1.tsx
│       ├── Step2.tsx
│       ├── Step3.tsx
│       ├── Summary.tsx
│       └── FormWrapper.tsx
├── components/
│   └── FormNavigation.tsx
├── hooks/
│   └── useMultiStepForm.ts
├── lib/
│   └── validationSchemas.ts
├── styles/
│   └── globals.css
├── utils/
│   └── fakeApi.ts
├── public/
├── tailwind.config.ts
├── tsconfig.json
├── README.md
└── package.json
```

---

## 🧪 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/multi-step-form.git
cd multi-step-form
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Run the Development Server

```bash
npm run dev
# or
yarn dev
```

Visit: [http://localhost:3000](http://localhost:3000)

---

## 🌑 Dark Mode Support

Dark mode is enabled via Tailwind’s `dark:` classes. The UI automatically adapts based on system preferences. You can manually toggle it by modifying Tailwind configuration or implementing a toggle switch.

---

## 🧾 Simulated API (Optional)

You can simulate a form submission using **React Query**:

1. Enable React Query setup in your form submit handler.
2. `utils/fakeApi.ts` simulates an API delay and logs submitted data.


---

## 📜 License

This project is licensed under the MIT License.

---

## 🙌 Acknowledgements

- React Hook Form for seamless form management
- Zod for powerful schema validation
- TailwindCSS for utility-first styling
- TanStack Query for optional API simulation

---


