import type { Metadata } from "next";
import { CandidatesPageProps } from "@/app/types";
import { PARTY, voteProgress } from "@/config/internasVoteCount";
import { ZOCALO_CANDIDATES_QTY, ZOCALO_FIXED_DECIMALS } from "@/config/internasConfig";

export async function generateMetadata({ params }: CandidatesPageProps): Promise<Metadata> {
  return {
    title: `${PARTY[params.party].name} - Zócalo Resultados Elecciones Internas 2024 | Bunkerland - Miedo al éxito`
  };
}

export default function CandidatesPage({ params }: CandidatesPageProps) {
  const { candidates } = PARTY[params.party];
  const sliceStart = params.slice * ZOCALO_CANDIDATES_QTY;
  const sliceEnd = (params.slice + 1) * ZOCALO_CANDIDATES_QTY;
  const totalPartyCount = candidates.reduce((previousValue, currentValue) => previousValue + currentValue.voteCount, 0);
  return (
    <body className={"bg-black"}>
    <main className={`zocalo ${params.party} flex flex-row items-center bg-black`}>
      <div className={"flex-grow-0 p-4 flex flex-col"}>
        <span className={"party-name"}>{PARTY[params.party].name}</span>
        <span className={"text-2xl"}>Mesas escrutadas: {voteProgress.toFixed(2)}%</span>
      </div>
      <div className={"flex-grow flex flex-row justify-around"}>
        {candidates.slice(sliceStart, sliceEnd).map(({ key, voteCount, name, lastName }) =>
          <div key={key} className={"flex flex-row justify-center items-center"}>
            <div className={`candidate ${key}`} />
            <div className={"candidate-name flex flex-col justify-around px-8"}>
              <span className={"last-name uppercase"}>{lastName}</span>
              <strong
                className={"percentage"}>{(voteCount * 100 / totalPartyCount).toFixed(ZOCALO_FIXED_DECIMALS)}%</strong>
            </div>
          </div>
        )}
      </div>
    </main>
    </body>
  );
}
