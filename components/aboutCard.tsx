export default function AboutCard({ title, subtitle, date, description }: { title: string, subtitle: string, date: string, description?: string }) {
    return (
        <div className="border-l border-l-gray-400 pl-5 space-y-2 py-1">
            <h3 className="text-xl sm:text-2xl font-semibold">{title}</h3>
            <div className="flex items-center gap-2">
                <h4 className="text-base sm:text-lg text-gray-600">{subtitle}</h4>
                <span className="mb-3 text-xl">.</span>
                <h4 className="text-base sm:text-lg text-gray-600">{date}</h4>
            </div>
            <p className="text-gray-600 text-base sm:text-lg">{description}</p>
        </div>
    )
}