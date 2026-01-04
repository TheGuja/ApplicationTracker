export default function SignupForm() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-sky-50 flex items-center justify-center p-6">
            <div className="max-w-md w-full bg-white/90 backdrop-blur-md rounded-2xl shadow-lg border border-gray-200 p-8">
                <div className="mb-6 text-center">
                    <h1 className="text-2xl font-extrabold text-gray-900">Create your account</h1>
                    <p className="text-sm text-gray-500">Start building your tracker — it's quick and free</p>
                </div>

                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-2 gap-3">
                        <div>
                            <label htmlFor="first_name" className="sr-only">First name</label>
                            <input id="first_name" name="first_name" type="text" required placeholder="First name" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent" />
                        </div>

                        <div>
                            <label htmlFor="last_name" className="sr-only">Last name</label>
                            <input id="last_name" name="last_name" type="text" required placeholder="Last name" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent" />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="email" className="sr-only">Email</label>
                        <input id="email" name="email" type="email" required placeholder="Email address" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent" />
                    </div>

                    <div>
                        <label htmlFor="password" className="sr-only">Password</label>
                        <input id="password" name="password" type="password" required placeholder="Password" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent" />
                    </div>

                    <div className="text-sm text-gray-600">
                        By creating an account you agree to our <a href="#" className="text-sky-600 hover:underline">Terms</a> and <a href="#" className="text-sky-600 hover:underline">Privacy Policy</a>.
                    </div>

                    <button type="submit" className="w-full py-2 rounded-lg bg-sky-600 text-white font-medium hover:bg-sky-700 transition">Create account</button>
                </form>

                {/* <div className="mt-6 flex items-center gap-3">
                    <div className="h-px flex-1 bg-gray-200" />
                    <span className="text-sm text-gray-500">or sign up with</span>
                    <div className="h-px flex-1 bg-gray-200" />
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3">
                    <button className="py-2 rounded-lg border border-gray-200 bg-white text-gray-600 hover:shadow">Google</button>
                    <button className="py-2 rounded-lg border border-gray-200 bg-white text-gray-600 hover:shadow">GitHub</button>
                </div> */}
            </div>
        </div>
    )
}