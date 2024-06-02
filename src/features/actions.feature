Feature: Homepage

Scenario: Homepage should have "EPAM | Software Engineering & Product Development Services" title
  Given I open "Homepage" page
  Then Page title should "be equal to" "EPAM | Software Engineering & Product Development Services"