import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import instagramAccount from "@/data/instagramAccount";
import SocialMedia from "./SocialMedia";
import { SocialMediaStructure } from "@/data/types";

describe("Given the SocialMedia component", () => {
  const mockUser: SocialMediaStructure = {
    networkIcon: "media/icons/instagram.svg",
    networkTitle: "Instagram",
    username: "dbeet",
    avatar:
      "https://scontent-bcn1-1.cdninstagram.com/v/t51.2885-19/328455781_651748266617500_8647717706643645460_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-bcn1-1.cdninstagram.com&_nc_cat=104&_nc_ohc=f1eIaJWer4wAX_TZ3CC&edm=ABmJApABAAAA&ccb=7-5&oh=00_AfBFQXdmzFhfwFPjjecKqA__d5UG9NHG1A8K_MYAG37qnw&oe=646AEBB4&_nc_sid=a1ad6c",
  };
  const { avatar, networkIcon, networkTitle, username } = mockUser;
  const mockAltText = instagramAccount.avatar;
  const mockPostListItem = {
    image:
      "https://scontent-bcn1-1.cdninstagram.com/v/t51.2885-15/273136395_621788122229795_4930049556129670927_n.webp?stp=c149.0.781.781a_dst-jpg_e35_s240x240&_nc_ht=scontent-bcn1-1.cdninstagram.com&_nc_cat=111&_nc_ohc=cIvTwC2o-0wAX_Y4WP0&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfAiHiZpVreroqITcSBQiygnQRZXLC9BaEd9Edmlci_jDA&oe=646AF836&_nc_sid=f70a57",
    description:
      "dbeet Like my favourite song going round and round in my head.",
  };

  const renderWithData = () =>
    render(
      <SocialMedia
        avatar={avatar}
        networkIcon={networkIcon}
        networkTitle={networkTitle}
        username={username}
        postList={[mockPostListItem]}
      />
    );

  describe("When it's rendered with instagram data", () => {
    renderWithData();

    test("Then it should show the user avatar image", () => {
      const expectedAltText = screen.getByAltText(mockAltText);
      expect(expectedAltText).toBeInTheDocument();
    });

    test("Then it show the instagram postList when 'Manage' is clicked", async () => {
      const showPostListButton = "Manage";

      renderWithData();

      const manageButton = screen.getByRole("button", {
        name: showPostListButton,
      });

      userEvent.click(manageButton);

      const postListItemText = await screen.findByText(
        mockPostListItem.description
      );
      expect(postListItemText).toBeInTheDocument();
    });
  });
});
