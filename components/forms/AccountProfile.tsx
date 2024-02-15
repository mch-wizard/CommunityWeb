"use client";

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserValidation } from "@/lib/validations/user";
import { z } from "zod";
import Image from "next/image";
import { ChangeEvent, useState } from "react";

interface Props {
	user: {
		id: string;
		objectId: string;
		username: string;
		name: string;
		bio: string;
		image: string;
	};
	btnTitle: string;
}

const handleImage = (
	e: ChangeEvent<HTMLInputElement>,
	fieldChange: (value: string) => void
) => {
	e.preventDefault();
};

function onSubmit(values: z.infer<typeof UserValidation>) {
	console.log(values);
}

const AccountProfile = ({ user, btnTitle }: Props) => {
	const [files, setFiles] = useState<File[]>([]);

	const form = useForm({
		resolver: zodResolver(UserValidation),
		defaultValues: {
			profile_photo: user?.image ? user.image : "",
			name: user?.name ? user.name : "",
			username: user?.username ? user.username : "",
			bio: user?.bio ? user.bio : "",
		},
	});

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className='flex flex-col justify-start gap-10'>
				<FormField
					control={form.control}
					name='profile_photo'
					render={({ field }) => (
						<FormItem className='flex items-center gap-4'>
							<FormLabel className='account-form_image-label'>
								{field.value ? (
									<Image
										src={field.value}
										alt='profile photo'
										width={96}
										height={96}
										priority
										className='rounded-full object-contain'
									/>
								) : (
									<Image
										src='/assets/profile.svg'
										alt='profile photo'
										width={24}
										height={24}
										className='object-contain'
									/>
								)}
							</FormLabel>
							<FormControl className='flex-1 text-base-semiBold text-gray-200'>
								<Input
									type='file'
									accept='image/*'
									placeholder='Upload a photo'
									className='account-form_image-input'
									onChange={e => handleImage(e, field.onChange)}
								/>
							</FormControl>
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name='name'
					render={({ field }) => (
						<FormItem className='flex flex-col w-full gap-3'>
							<FormLabel className='text-base-semiBold text-light-2'>
								Name
							</FormLabel>
							<FormControl className='flex-1 text-base-semiBold text-gray-200'>
								<Input
									type='text'
									className='account-form_input no-focus'
									{...field}
								/>
							</FormControl>
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='username'
					render={({ field }) => (
						<FormItem className='flex flex-col gap-3 w-full'>
							<FormLabel className='text-base-semiBold text-light-2'>
								Username
							</FormLabel>
							<FormControl className='flex-1 text-base-semiBold text-gray-200'>
								<Input
									type='text'
									className='account-form_input no-focus'
									{...field}
								/>
							</FormControl>
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='bio'
					render={({ field }) => (
						<FormItem className='flex flex-col gap-3 w-full'>
							<FormLabel className='text-base-semiBold text-light-2'>
								Bio
							</FormLabel>
							<FormControl className='flex-1 text-base-semiBold text-gray-200'>
								<Textarea
									rows={10}
									className='account-form_input no-focus'
									{...field}
								/>
							</FormControl>
						</FormItem>
					)}
				/>
				<Button type='submit'>Submit</Button>
			</form>
		</Form>
	);
};

export default AccountProfile;
