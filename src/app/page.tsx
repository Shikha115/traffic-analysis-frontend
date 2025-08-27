"use client";
import { useState } from "react";
import { useTraffic } from "@/services/traffic.service";
import SearchBar from "@/components/SearchBar";
import StatsCard from "@/components/StatsCard";
import BreakdownList from "@/components/BreakdownList";
import { formatDate } from "../components/formatDate";

export default function Home() {
  const [domain, setDomain] = useState("");
  const { data, isLoading, error, refetch } = useTraffic(domain);

  console.log(data, "data");

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto p-6 space-y-8">
        <h1 className="text-3xl font-bold">Traffic Analysis</h1>

        {/* 🔍 Search */}
        <SearchBar
          onSearch={(d) => {
            setDomain(d);
            refetch();
          }}
        />

        {/* ⏳ Loading / Error */}
        {isLoading && <div>Loading...</div>}
        {error && <div className="text-red-600">Failed to fetch data</div>}

        {/* ✅ Show data */}
        {data && (
          <div className="space-y-10">
            {/* 📊 Overview Stats */}
            <section>
              <h2 className="text-xl font-semibold mb-3">Overview</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <StatsCard
                  title="Visits (est.)"
                  value={data.Engagments?.Visits?.toLocaleString() ?? "—"}
                />
                <StatsCard
                  title="Global Rank"
                  value={data?.GlobalRank ?? "—"}
                />
                <StatsCard
                  title="Last Fetched"
                  value={formatDate(data.fetchedAt)}
                />
              </div>
            </section>

            {/* 🌍 Countries & Referrers */}
            <section>
              <h2 className="text-xl font-semibold mb-3">Breakdown</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <BreakdownList
                  title="Top Countries"
                  items={(data.TopCountryShares || []).map((c) => ({
                    label: c.CountryCode,
                    value: c.Value,
                  }))}
                />
                <BreakdownList
                  title="Referrers"
                  items={(data.TrafficSources
                    ? Object.entries(data.TrafficSources)
                    : []
                  ).map(([key, value]) => ({
                    label: key,
                    value,
                  }))}
                />
              </div>
            </section>

            {/* 🔑 Keywords */}
            <section>
              <h2 className="text-xl font-semibold mb-3">Top Keywords</h2>
              <BreakdownList
                title="Keywords"
                items={(data.TopKeywords || []).map((k) => ({
                  label: k.Name,
                  value: k.Volume / 100, // scale for %
                }))}
              />
            </section>

            {/* 🏆 Rankings */}
            <section>
              <h2 className="text-xl font-semibold mb-3">Rankings</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <StatsCard
                  title="Country Rank"
                  value={data.CountryRank?.Rank ?? "—"}
                />
                <StatsCard
                  title="Category Rank"
                  value={data.CategoryRank?.Rank ?? "—"}
                />
                <StatsCard
                  title="Global Category Rank"
                  value={data.GlobalCategoryRank?.Rank ?? "—"}
                />
              </div>
            </section>

            {/* ⚔️ Competitors */}
            <section>
              <h2 className="text-xl font-semibold mb-3">Competitors</h2>
              <ul className="bg-white p-4 rounded-lg shadow space-y-2">
                {data.Competitors?.TopSimilarityCompetitors?.length ? (
                  data.Competitors.TopSimilarityCompetitors.map((c, idx) => (
                    <li key={idx} className="text-gray-700">
                      {c}
                    </li>
                  ))
                ) : (
                  <li className="text-gray-400">No competitors</li>
                )}
              </ul>
            </section>

            {/* 📈 Engagement */}
            <section>
              <h2 className="text-xl font-semibold mb-3">Engagement</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <StatsCard
                  title="Bounce Rate"
                  value={
                    data?.Engagments?.BounceRate !== undefined
                      ? `${data.Engagments.BounceRate.toFixed(1)}%`
                      : "—"
                  }
                />
                <StatsCard
                  title="Pages / Visit"
                  value={
                    data.Engagments?.PagePerVisit !== undefined
                      ? data.Engagments.PagePerVisit.toFixed(1)
                      : "—"
                  }
                />
                <StatsCard
                  title="Avg. Time on Site"
                  value={
                    data.Engagments?.TimeOnSite !== undefined
                      ? `${data.Engagments.TimeOnSite.toFixed(1)} sec`
                      : "—"
                  }
                />
              </div>
            </section>
          </div>
        )}
      </div>
    </main>
  );
}
