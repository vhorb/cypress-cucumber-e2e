Feature: Google Main Page

  I want to open a search engine

  @focus # will run only this test
  Scenario: Opening a search engine page
    Given I open Google page
    Then I see "Google" in the title

  Scenario: Check google search
    Given I open Google page
    When I search for "MLB"
    Then I should see "MLB" related pages