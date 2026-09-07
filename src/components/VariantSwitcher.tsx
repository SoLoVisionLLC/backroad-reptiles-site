import React from 'react';
import './VariantSwitcher.css';

type VariantKey = 'a' | 'b' | 'c';

const VARIANTS: Record<VariantKey, { code: string; name: string; host: string }> = {
  a: { code: 'A', name: 'Field Guide', host: 'backroadreptiles-a.sololink.cloud' },
  b: { code: 'B', name: 'Naturalist', host: 'backroadreptiles-b.sololink.cloud' },
  c: { code: 'C', name: 'Keeper Hub', host: 'backroadreptiles-c.sololink.cloud' },
};

function currentVariant(): VariantKey {
  if (typeof window === 'undefined') return 'a';
  const match = Object.entries(VARIANTS).find(([, variant]) => window.location.hostname === variant.host);
  return (match?.[0] as VariantKey | undefined) ?? 'a';
}

function routeFor(host: string): string {
  if (typeof window === 'undefined') return `https://${host}/`;
  return `https://${host}${window.location.pathname}${window.location.search}${window.location.hash}`;
}

export const VariantSwitcher: React.FC = () => {
  const active = currentVariant();

  return (
    <aside className="preview-dock" data-preview-dock-version="v8" aria-label="Back Road Reptiles preview comparison">
      <div className="preview-dock-scroll">
        <nav className="preview-designs" aria-label="Preview designs">
          <span className="preview-group-label" aria-hidden="true">VARIANT:</span>
          {Object.entries(VARIANTS).map(([key, variant]) => {
            const variantKey = key as VariantKey;
            const label = `Design ${variant.code}: ${variant.name}`;
            return (
              <a
                className={`preview-design${active === variantKey ? ' is-active' : ''}`}
                href={routeFor(variant.host)}
                aria-current={active === variantKey ? 'page' : undefined}
                aria-label={label}
                title={label}
                key={variantKey}
              >
                <span className="preview-design-code" aria-hidden="true">{variant.code}</span>
                <strong>({variant.name})</strong>
              </a>
            );
          })}
        </nav>
      </div>
    </aside>
  );
};
