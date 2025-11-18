import z from "zod";

// Calculate birthyear that is 18 years from today
const minAgeDate = new Date();
minAgeDate.setFullYear(minAgeDate.getFullYear() - 18)

// Register form schema
export const registerFormSchema = z
  .object({
    firstname: z.string().min(2, "First name is too short").max(50, "First name is too long").nonempty("First name is required"),
    lastname: z.string().min(2, "Last name is too short").max(50, "Last name is too long").nonempty("Last name is required"),
    email: z.email("Email must be valid email format").nonempty("Email is requierd"),
    password: z.string().min(6, "Password must consist of at least 6 characters").nonempty("Password is required"),
    repeatPassword: z.string().nonempty("You must repeat your password"),
    phone: z.string().max(30, "Phone number is too long").regex(/^[0-9+\-\s()]*$/, "Phone number can only contain numbers and symbols (+, -, (, ))").nonempty("Phone number is required"),
    bio: z.string().max(300).optional().nullable(),
    profilePicture: z.string().optional().nullable(),
    birthday: z.string().refine((value) => new Date(value) < minAgeDate, "You must be at least 18 years old").nonempty("Date of birth is required")
  })
  // Validate that password and repeated passwords are identical
  .refine((data) => data.password === data.repeatPassword, {
    message: "Passwords do not match",
    path: ["repeatPassword"]
  });

  export type RegisterSchemaType = z.infer<typeof registerFormSchema>;