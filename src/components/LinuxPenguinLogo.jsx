export default function LinuxPenguinLogo({ className = '' }) {
  return (
    <span className={`linux-penguin ${className}`} aria-hidden="true">
      <span className="linux-penguin-body">
        <span className="linux-penguin-face">
          <span className="linux-penguin-eye linux-penguin-eye-left" />
          <span className="linux-penguin-eye linux-penguin-eye-right" />
          <span className="linux-penguin-beak" />
        </span>
        <span className="linux-penguin-belly" />
      </span>
      <span className="linux-penguin-foot linux-penguin-foot-left" />
      <span className="linux-penguin-foot linux-penguin-foot-right" />
    </span>
  );
}
