import { redirect } from "next/navigation";
export default function Home(){
	redirect('/projects/downganizer');
	return (
		<div className="h-screen"></div>
	);
}