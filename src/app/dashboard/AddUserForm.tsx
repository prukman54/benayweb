"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from "@/components/UI/dialog";
import { useFormik } from "formik";
import { FormikProvider } from "formik";
import { Input } from "@/components/UI/input";
import { Label } from "@/components/UI/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/UI/select";
import { RadioGroup, RadioGroupItem } from "@/components/UI/radio-group";
import * as Yup from "yup";
import { wait } from "@/utils";

const ValidationSchema = Yup.object({
  cashtag: Yup.string().required("Cashtag is required!"),
  name: Yup.string().required("Name is required"),
  cid: Yup.string().required("CID is required"),
  facebook: Yup.string().required("Facebook is required"),
  email: Yup.string()
    .email("Invalid email address format")
    .required("Email is required"),
  phone: Yup.string().required("Phone is required"),
});

interface InputProps {
  cashtag: string;
  cid: string;
  name: string;
  facebook: string;
  email: string;
  phone: string;
  connect?: string;
  category?: string;
  case?: string;
  refer?: string;
  juwa?: string;
  gamevault?: string;
  firekirin?: string;
  milkyway?: string;
  orionstar?: string;
  mafia?: string;
  river_sweepstakes?: string;
  cash_machine?: string;
}

interface Props {
  btnClass?: string;
}

const Input_style = `bg-black/[.05] rounded-[.5rem] shadow-sm placeholder:text-black/70 border-black/70 h-[2.75rem] placeholder:font-medium placeholder:capitalize`;

const AddUserForm = ({ btnClass }: Props) => {
  const [open, setOpen] = useState(false);

  const formik = useFormik({
    initialValues: {
      cashtag: "",
      cid: "",
      name: "",
      facebook: "",
      email: "",
      phone: "",
      connect: "",
      category: "",
      case: "",
      refer: "",
      juwa: "",
      gamevault: "",
      firekirin: "",
      milkyway: "",
      orionstar: "",
      mafia: "",
      river_sweepstakes: "",
      cash_machine: "",
    },
    validationSchema: ValidationSchema,

    onSubmit: async (values: InputProps) => {
      try {
      } catch {}
    },
  });

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <button
          className={`bg-black/50 cursor-pointer h-[2.5rem] rounded-full text-sm flex items-center justify-center uppercase font-medium tracking-wide shadow-sm w-full ${btnClass}`}
        >
          add user
        </button>
      </DialogTrigger>

      <DialogContent
        onInteractOutside={(e) => {
          e.preventDefault();
        }}
        className="min-w-[80%] bg-white text-black pb-[2rem] md:min-w-[90%]"
      >
        <DialogHeader className="mb-[2rem]">
          <DialogTitle className="uppercase text-center text-[1.5rem] font-[600] leading-[1.15] bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text cursor-pointer">
            Add new user
          </DialogTitle>
        </DialogHeader>

        <FormikProvider value={formik}>
          <form
            onSubmit={(event) => {
              event.preventDefault();
            }}
            className="flex flex-col gap-y-[2.5rem]"
          >
            <div className="grid grid-cols-12 gap-[2.5rem] md:gap-0 md:gap-y-[2.5rem]">
              <div className="col-span-4 md:col-span-12">
                <Label htmlFor="cashtag">Cashtag</Label>
                <Input
                  className={`${Input_style}`}
                  type="text"
                  name="cashtag"
                  value={formik.values.cashtag}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              <div className="col-span-4 md:col-span-12">
                <Label htmlFor="cid">CID</Label>
                <Input
                  className={`${Input_style}`}
                  type="text"
                  name="cid"
                  value={formik.values.cid}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              <div className="col-span-4 md:col-span-12">
                <Label htmlFor="name">Name</Label>
                <Input
                  className={`${Input_style}`}
                  type="text"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>

              <div className="col-span-4 md:col-span-12">
                <Label htmlFor="facebook">Facebook</Label>
                <Input
                  className={`${Input_style}`}
                  type="text"
                  name="facebook"
                  value={formik.values.facebook}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              <div className="col-span-4 md:col-span-12">
                <Label htmlFor="email">Email</Label>
                <Input
                  className={`${Input_style}`}
                  type="text"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              <div className="col-span-4 md:col-span-12">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  className={`${Input_style}`}
                  type="text"
                  name="phone"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
            </div>

            <div className="grid grid-cols-12 gap-[2.5rem] md:gap-0 md:gap-y-[2.5rem]">
              <div className="col-span-6 md:col-span-12">
                <Label htmlFor="case">Case</Label>
                <Input
                  className={`${Input_style}`}
                  type="text"
                  name="case"
                  value={formik.values.case}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              <div className="col-span-6 md:col-span-12">
                <Label htmlFor="refer">Referred By</Label>
                <Select>
                  <SelectTrigger className={`${Input_style}`}>
                    <SelectValue placeholder="Pick a agent" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-12 gap-[2.5rem] md:gap-0 md:gap-y-[2.5rem]">
              <div className="col-span-4 md:col-span-12">
                <Label htmlFor="juwa">Juwa</Label>
                <Input
                  className={`${Input_style}`}
                  type="text"
                  name="juwa"
                  value={formik.values.juwa}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              <div className="col-span-4 md:col-span-12">
                <Label htmlFor="gamevault">Gamevault</Label>
                <Input
                  className={`${Input_style}`}
                  type="text"
                  name="gamevault"
                  value={formik.values.gamevault}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              <div className="col-span-4 md:col-span-12">
                <Label htmlFor="firekirin">Fire Kirin</Label>
                <Input
                  className={`${Input_style}`}
                  type="text"
                  name="firekirin"
                  value={formik.values.firekirin}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>

              <div className="col-span-4 md:col-span-12">
                <Label htmlFor="milkyway">Milkyway</Label>
                <Input
                  className={`${Input_style}`}
                  type="text"
                  name="milkyway"
                  value={formik.values.milkyway}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              <div className="col-span-4 md:col-span-12">
                <Label htmlFor="orionstar">Orionstar</Label>
                <Input
                  className={`${Input_style}`}
                  type="text"
                  name="orionstar"
                  value={formik.values.orionstar}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              <div className="col-span-4 md:col-span-12">
                <Label htmlFor="mafia">Mafia</Label>
                <Input
                  className={`${Input_style}`}
                  type="text"
                  name="mafia"
                  value={formik.values.mafia}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              <div className="col-span-4 md:col-span-12">
                <Label htmlFor="river_sweepstakes">River Sweepstakes</Label>
                <Input
                  className={`${Input_style}`}
                  type="text"
                  name="river_sweepstakes"
                  value={formik.values.river_sweepstakes}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              <div className="col-span-4 md:col-span-12">
                <Label htmlFor="cash_machine">Cash Machine</Label>
                <Input
                  className={`${Input_style}`}
                  type="text"
                  name="cash_machine"
                  value={formik.values.cash_machine}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
            </div>

            <RadioGroup defaultValue="a">
              <Label className="capitalize drop-shadow-md text-[1.25rem] mb-[1rem]">
                Categorize the user
              </Label>
              <div className="flex items-center space-x-2 cursor-pointer">
                <RadioGroupItem value="a" id="category-a" />
                <Label htmlFor="category-a">Category A</Label>
              </div>
              <div className="flex items-center space-x-2 cursor-pointer">
                <RadioGroupItem value="b" id="category-b" />
                <Label htmlFor="category-b">Category B</Label>
              </div>
              <div className="flex items-center space-x-2 cursor-pointer">
                <RadioGroupItem value="c" id="category-c" />
                <Label htmlFor="category-c">Category C</Label>
              </div>
            </RadioGroup>

            <div className="flex items-center gap-[1.5rem] md:flex-col">
              <button
                type="submit"
                className="py-4 w-full px-10 tracking-wide rounded-full text-white bg-gradient-to-r from-primary hover:bg-gradient-to-l hover:transition-all to-secondary bg-white/20 text-[.9rem] leading-[1] uppercase font-medium cursor-pointer duration-300"
              >
                add user
              </button>

              <button
                onClick={() => {
                  setOpen(false);
                }}
                className="py-4 w-full px-10 tracking-wide rounded-full text-black bg-black/10 hover:transition-all to-secondary hover:bg-black/20 border border-black/20 text-[.9rem] leading-[1] uppercase font-medium cursor-pointer duration-300"
              >
                cancel
              </button>
            </div>
          </form>
        </FormikProvider>
      </DialogContent>
    </Dialog>
  );
};

export default AddUserForm;
