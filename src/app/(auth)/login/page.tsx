import LoginHeader from "./_components/Header";
import LoginForm from "./_components/Form";
import LoginFooter from "./_components/Footer";

export default function LoginPage() {
  return (
    <main className="h-full w-full overflow-y-auto scroll-smooth">
      <div className="mx-auto flex min-h-full max-w-2xl flex-col items-center justify-center px-8 py-10">
        <LoginHeader />
        <LoginForm />
        <LoginFooter />
      </div>
    </main>
  );
}