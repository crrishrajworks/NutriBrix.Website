export default function SoilDivider({ thick }: { thick?: boolean }) {
  return <div className={thick ? "soil-divider--thick" : "soil-divider"} aria-hidden="true" />;
}
