import { assert, expect } from 'chai';
import { fetchTeamMembers } from './../src/personality';

describe(`Quickbird Studios Team`, function() {
  it(`should be an awesome team`, function() {
    const quickBirdTeamMembers = fetchTeamMembers();

    const awesomeTeamMembers = quickBirdTeamMembers.filter(
      teamMember =>
        teamMember.isPassionate &&
        teamMember.isFriendly &&
        teamMember.isConstantlyImproving,
    );

    assert.equal(awesomeTeamMembers.length, quickBirdTeamMembers.length);
    expect(awesomeTeamMembers.length).to.equal(quickBirdTeamMembers.length);
  });
});
