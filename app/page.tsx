import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { TrendingTopics } from "@/components/trending-topics"
import { PoliticalCompass } from "@/components/political-compass"
import { TopNews } from "@/components/top-news"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative">
        <div className="container py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Featured News - Takes up 2 columns */}
            <div className="md:col-span-2 relative group">
              <Link href="/news/1" className="block">
                <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
                  <img
                    src="/placeholder.svg?height=400&width=800"
                    alt="Featured news"
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/0" />
                  <div className="absolute bottom-0 p-6 text-white">
                    <span className="inline-block px-2 py-1 mb-2 text-sm bg-primary rounded">Breaking</span>
                    <h2 className="text-2xl font-bold mb-2">Major Policy Reform Announced: What You Need to Know</h2>
                    <p className="text-sm text-gray-200">
                      Comprehensive analysis of the newly proposed legislative changes and their potential impact on
                      citizens.
                    </p>
                  </div>
                </div>
              </Link>
            </div>

            {/* Secondary News Grid - 2x2 grid taking up 1 column */}
            <div className="grid grid-cols-2 gap-4 md:col-span-1">
              {[
                {
                  title: "Economic Update",
                  description: "Latest economic indicators show positive growth",
                  image: "/placeholder.svg?height=200&width=400",
                  category: "Economy",
                },
                {
                  title: "Healthcare Reform",
                  description: "New healthcare initiatives announced",
                  image: "/placeholder.svg?height=200&width=400",
                  category: "Healthcare",
                },
                {
                  title: "Education Policy",
                  description: "Changes in education funding structure",
                  image: "/placeholder.svg?height=200&width=400",
                  category: "Education",
                },
                {
                  title: "Environmental Plan",
                  description: "New climate action goals set",
                  image: "/placeholder.svg?height=200&width=400",
                  category: "Environment",
                },
              ].map((news, index) => (
                <Link key={index} href={`/news/${index + 2}`} className="group">
                  <div className="relative aspect-square overflow-hidden rounded-lg">
                    <img
                      src={news.image || "/placeholder.svg"}
                      alt={news.title}
                      className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/0" />
                    <div className="absolute bottom-0 p-3 text-white">
                      <span className="inline-block px-2 py-0.5 mb-1 text-xs bg-primary rounded">{news.category}</span>
                      <h3 className="text-sm font-bold">{news.title}</h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="container space-y-8 py-12 md:py-16 lg:py-20">
        <div className="mx-auto grid gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          <Card className="row-span-2">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold">Trending Topics</h2>
              <TrendingTopics />
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold">Political Compass</h2>
              <PoliticalCompass />
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold">Latest Updates</h2>
              <div className="mt-4 space-y-4">
                <div className="space-y-2">
                  <h3 className="font-medium">New Policy Analysis</h3>
                  <p className="text-sm text-muted-foreground">Impact assessment of recent economic policies</p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium">Election Tracker</h3>
                  <p className="text-sm text-muted-foreground">Real-time updates on upcoming elections</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

