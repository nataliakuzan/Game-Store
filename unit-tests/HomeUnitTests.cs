using GameStore.Client.Pages;

namespace unit_tests;

public class HomeUnitTests : BunitTestContext
{
	[Test]
	public void HomeHasTitle()
	{
		// Arrange
		var cut = RenderComponent<Home>();

		// Assert that content of the heading shows title
		cut.Find("h1").MarkupMatches("<h1>Game Catalog</h1>");
	}
}