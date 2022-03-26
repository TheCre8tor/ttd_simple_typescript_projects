interface Personality {
  isPassionate: boolean;
  isFriendly: boolean;
  isConstantlyImproving: boolean;
}

export function fetchTeamMembers(): Personality[] {
  return [
    {
      isPassionate: true,
      isFriendly: true,
      isConstantlyImproving: true,
    },
  ];
}
