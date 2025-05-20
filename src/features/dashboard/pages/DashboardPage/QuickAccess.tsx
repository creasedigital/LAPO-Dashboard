import { AccessCard } from "@/components/ui/AccessCard";
import { Card } from "@/components/ui/card";
import CardShield  from "@/assets/images/credit-card-shield.png";
import CardMinus from "@/assets/images/credit-card-02.png";
import CardEdit  from "@/assets/images/credit-card-edit.png";
import CardPlus  from "@/assets/images/credit-card-plus.png";

const accessType = [
  { title: "Manage a Card", icon: CardShield },
  { title: "Issue Instant Card", icon: CardMinus },
  { title: "Issue Personalized Card", icon: CardEdit },
  { title: "Review Card Requests", icon: CardPlus },

]

const QuickAccess = () => {
	return (
		<Card className="p-6 gap-0 shadow-none">
			<h4 className="leading-[18px] tracking-normal text-[16px] font-medium mb-[13px]">
				Your Quick Access
			</h4>
      <div className="flex gap-2 max-w-full flex-wrap lg:flex-nowrap">
                {accessType.map((item) =>

                    <AccessCard
                      key={item.title}
                      icon={item.icon}
                      title={item.title}
                    />
                )}
      </div>
		</Card>
	);
};

export default QuickAccess;
