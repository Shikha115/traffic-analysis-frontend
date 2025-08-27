// frontend/services/apiHook.ts
import axios from "axios";
import { BASE_URL, GeneralApiResponse } from "./url.service";
import { useQuery } from "@tanstack/react-query";

const prefix = "/traffic";

export interface ITraffic {
  _id: string;
  domain: string;
  SiteName: string;
  Title?: string;
  Description?: string;
  Category?: string;
  LargeScreenshot?: string;
  IsSmall?: boolean;
  IsDataFromGa?: boolean;
  Policy?: number;
  SnapshotDate?: Date;
  cached?: number;

  TopCountryShares?: { Country: number; CountryCode: string; Value: number }[];
  Engagments?: {
    BounceRate: number;
    Month: number;
    Year: number;
    PagePerVisit: number;
    Visits: number;
    TimeOnSite: number;
  };
  EstimatedMonthlyVisits?: Record<string, number>;

  GlobalRank?: number;
  CountryRank?: {
    Country: number;
    CountryCode: string;
    Rank: number;
  };
  CategoryRank?: {
    Rank: number | string;
    Category: string;
  };
  GlobalCategoryRank?: any;

  TrafficSources?: {
    Social: number;
    "Paid Referrals": number;
    Mail: number;
    Referrals: number;
    Search: number;
    Direct: number;
  };

  Competitors?: {
    TopSimilarityCompetitors: string[];
  };

  TopKeywords?: {
    Name: string;
    EstimatedValue: number;
    Volume: number;
    Cpc: number;
  }[];

  Countries?: {
    Code: string;
    UrlCode: string;
    Name: string;
  }[];

  Notification?: {
    Content?: string | null;
  };

  fetchedAt: Date;
  createdAt: Date;
  updatedAt: Date;
}

function TrafficApiHook() {
  const getTraffic = async (domain: string) => {
    return axios.get<GeneralApiResponse<ITraffic>>(
      `${BASE_URL}${prefix}?domain=${domain}`
    );
  };
  return { getTraffic };
}

export const useTraffic = (domain: string) => {
  const { getTraffic } = TrafficApiHook();
  return useQuery({
    queryKey: ["traffic", domain],
    queryFn: () => getTraffic(domain).then((res) => res.data.data),
    enabled: !!domain && domain.length > 3,
  });
};
