export default function LoginFrom() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-sky-50 flex items-center justify-center p-6">
            <div className="max-w-md w-full bg-white/90 backdrop-blur-md rounded-2xl shadow-lg border border-gray-200 p-8">
                <div className="mb-6 text-center">
                    <h1 className="text-2xl font-extrabold text-gray-900">Welcome back</h1>
                    <p className="text-sm text-gray-500">Sign in to your account to continue</p>
                </div>

                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <div>
                        <label htmlFor="email" className="sr-only">Email</label>
                        <input id="email" name="email" type="email" required placeholder="Email address" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent" />
                    </div>

                    <div>
                        <label htmlFor="password" className="sr-only">Password</label>
                        <input id="password" name="password" type="password" required placeholder="Password" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent" />
                    </div>

                    <div className="flex items-center justify-between text-sm">
                        <label className="flex items-center gap-2 text-gray-600">
                            <input type="checkbox" className="h-4 w-4 rounded border-gray-300" />
                            Remember me
                        </label>
                        <a href="#" className="text-sky-600 hover:underline">Forgot?</a>
                    </div>

                    <button type="submit" className="w-full py-2 rounded-lg bg-sky-600 text-white font-medium hover:bg-sky-700 transition">Sign in</button>
                </form>

                {/* <div className="mt-6 flex items-center gap-3">
                    <div className="h-px flex-1 bg-gray-200" />
                    <span className="text-sm text-gray-500">or continue with</span>
                    <div className="h-px flex-1 bg-gray-200" />
                </div> */}

                {/* <div className="mt-4 grid grid-cols-2 gap-3">
                    <button className="py-2 rounded-lg border border-gray-200 bg-white text-gray-600 hover:shadow">Google</button>
                    <button className="py-2 rounded-lg border border-gray-200 bg-white text-gray-600 hover:shadow">GitHub</button>
                </div> */}
            </div>
        </div>
    )
}