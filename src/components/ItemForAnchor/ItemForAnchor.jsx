import * as S from './ItemForAnchor.styled';

function ItemForAnchor() {
    return (
        <S.ItemForAnchor>
            <S.AnchorLink href="#top">
                <S.AnchorButton href="#top" className="anchor-button">
                    Наверх ↑
                </S.AnchorButton>
            </S.AnchorLink>
        </S.ItemForAnchor>
    );
}

export default ItemForAnchor;
