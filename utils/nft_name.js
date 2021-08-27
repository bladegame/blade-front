export function characterName(kind) {
  switch (kind) {
    case '1':
      return 'Blaze Dazzle';
    case '2':
      return 'Bleed Phantom';
    case '3':
      return 'Blade Lord';
    default:
      return '';
  }
}

export function weaponName(kind, level) {
  if (kind === '1' && level === '1') {
    return 'Axe of Cut rock';
  }
  if (kind === '1' && level === '2') {
    return 'Axe of Soul Suppression';
  }
  if (kind === '1' && level === '3') {
    return 'Holy Axe';
  }
  if (kind === '2' && level === '1') {
    return 'Bloodthirsty Greatsword';
  }
  if (kind === '2' && level === '2') {
    return 'Demon Great Sword';
  }
  if (kind === '2' && level === '3') {
    return 'Great Sword of Gods';
  }
  if (kind === '3' && level === '1') {
    return 'Sage Sword';
  }
  if (kind === '3' && level === '2') {
    return 'Saint Mark Sword';
  }
  if (kind === '3' && level === '3') {
    return 'Demon Sword';
  }
  if (kind === '4' && level === '1') {
    return 'Dragon Slaying Axe';
  }
  if (kind === '4' && level === '2') {
    return 'Overlord Axe';
  }
  if (kind === '4' && level === '3') {
    return 'Axe of Vengeance';
  }
  if (kind === '5' && level === '1') {
    return 'Warhammer of Killing';
  }
  if (kind === '5' && level === '2') {
    return 'Warhammer of Fury';
  }
  if (kind === '5' && level === '3') {
    return 'Grim Reaper';
  }
  return '';
}
