"use client";

import axios from "axios";
import { Coin } from "@/types/Coin.interface";
import { useMemo, useState, useEffect } from "react";
import FilteringTable from "@/components/FilteringTable";
import Image from "next/image";

const loadCriptos = async () => {
  try {
    const { data } = await axios(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    );
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return data;
  } catch (error) {
    console.log(error);
  }
};

function CriptosPage() {
  const [coins, setCoins] = useState<Coin[] | undefined>([]);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const data = await loadCriptos();
        setCoins(data);
      } catch (error) {
        console.error("Error loading coins:", error);
      }
    };

    fetchCoins();
  }, []);

  const columns = useMemo(
    () => [
      {
        accessorKey: "index",
        header: "#",
        cell: ({ row }:any) => <div>{row.index + 1}</div>,
      },
      {
        accessorKey: "image",
        header: "Image",
        cell: ({ getValue }) => (
          <Image
            src={getValue()}
            alt="Coin Image"
            width={30}
            height={30}
            priority
            className=" img-fluid img-responsive w-auto"
          />
        ),
      },
      {
        accessorKey: "name",
        header: "Coin",
      },
      {
        accessorKey: "symbol",
        header: "Symbol",
        cell: ({ getValue }) => {
          return <div className="text-muted text-uppercase">{getValue()}</div>;
        },
      },
      {
        accessorKey: "current_price",
        header: "Price",
        cell: ({ getValue }) => {
          return <div>${getValue().toLocaleString()}</div>;
        },
      },
      {
        accessorKey: "price_change_percentage_24h",
        header: "Price Change",
        cell: ({ getValue }) => {
          const value = getValue();
          return <div style={{ color: value > 0 ? "green" : "red" }}>{value}%</div>;
        },
      },
      {
        accessorKey: "total_volume",
        header: "24h Volume",
        cell: ({ getValue }) => {
          return <div>${getValue().toLocaleString()}</div>;
        },
      },
    ],
    []
  );

  return (
    <div className="container-fluid mt-4 ">
      <FilteringTable columns={columns} data={coins} />
    
    </div>
  );
}

export default CriptosPage;
