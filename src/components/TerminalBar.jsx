import TerminalTicker from './TerminalTicker.jsx';

export default function TerminalBar() {
  return (
    <div className="border-b border-line bg-ink/95 transition-colors">
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
        <TerminalTicker className="w-full" />
      </div>
    </div>
  );
}
