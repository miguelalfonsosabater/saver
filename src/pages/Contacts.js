import("./Contacts.css");

const Contacts = () => {
    return (
        <div className="contacts-container ">
            <h3> EMERGENCY HOTLINES </h3>
            <div className="province-link">
                {" "}
                <a href="#abra"> Abra ·</a> <a href="#apayao"> Apayao ·</a>{" "}
                <a href="#benguet"> Benguet ·</a>{" "}
                <a href="#ifugao"> Ifugao ·</a>{" "}
                <a href="#mt-province"> Mt.Province ·</a>
                <a href="#kalinga"> Kalinga</a>
            </div>
            <table class=" table contacts-table">
                <tbody>
                    <tr>
                        <td className=""> NAME </td>
                        <td className=""> CONTACT </td>
                    </tr>
                    <tr>
                        <th id="abra" className="province-title" colspan="2">
                            {" "}
                            ABRA{" "}
                        </th>
                    </tr>
                    <tr>
                        <td> Bangued (capital) </td>
                        <td> 0916-288-1681 </td>
                    </tr>
                    <tr>
                        <td> Boliney </td>
                        <td> 0997-604-7692 </td>
                    </tr>
                    <tr>
                        <td> Bucay </td>
                        <td> 0917-302-6781 </td>
                    </tr>
                    <tr>
                        <td> Bucloc </td>
                        <td> 0917-894-1052 </td>
                    </tr>
                    <tr>
                        <td> Daguioman </td>
                        <td> 0927-803-9131 </td>
                    </tr>
                    <tr>
                        <td> Danglas </td>
                        <td> 0916-223-0669 </td>
                    </tr>
                    <tr>
                        <td> Dolores </td>
                        <td> 0917-779-3925 </td>
                    </tr>
                    <tr>
                        <td> La Paz </td>
                        <td> 0917-312-2752 </td>
                    </tr>
                    <tr>
                        <td> Lacub </td>
                        <td> 0935-965-4027 </td>
                    </tr>
                    <tr>
                        <td> Lagangilang </td>
                        <td> 0917-570-0243 </td>
                    </tr>
                    <tr>
                        <td> Lagayan </td>
                        <td> 0917-801-6914 </td>
                    </tr>
                    <tr>
                        <td> Langiden </td>
                        <td> 0917-443-8016 </td>
                    </tr>
                    <tr>
                        <td> Licuan-baay (licuan) </td>
                        <td> 0917-819-4530 </td>
                    </tr>
                    <tr>
                        <td> Luba </td>
                        <td> 0917-825-7359 </td>
                    </tr>
                    <tr>
                        <td> Malibcong </td>
                        <td> 0915-856-6617 </td>
                    </tr>
                    <tr>
                        <td> Manabo </td>
                        <td> 0917-107-8910 </td>
                    </tr>
                    <tr>
                        <td> Peñarrubia </td>
                        <td> 0977-211-4737 </td>
                    </tr>
                    <tr>
                        <td> Pidigan </td>
                        <td> 0998-951-9246 </td>
                    </tr>
                    <tr>
                        <td> Pilar </td>
                        <td> 0906-371-0263 </td>
                    </tr>
                    <tr>
                        <td> Sallapadan </td>
                        <td> 0995-318-9782 </td>
                    </tr>
                    <tr>
                        <td> San Isidro </td>
                        <td> 0956-126-7745 </td>
                    </tr>
                    <tr>
                        <td> San Juan </td>
                        <td> 0927-247-1647 </td>
                    </tr>
                    <tr>
                        <td> San Quintin </td>
                        <td> 0906-960-4748 </td>
                    </tr>
                    <tr>
                        <td> Tayum </td>
                        <td> 0917-802-0329 </td>
                    </tr>
                    <tr>
                        <td> Tineg </td>
                        <td> 0917-804-3743 </td>
                    </tr>
                    <tr>
                        <td> Tubo </td>
                        <td> 0917-884-8538 </td>
                    </tr>
                    <tr>
                        <td> Villaviciosa </td>
                        <td> 0995-433-9668 </td>
                    </tr>
                    <tr>
                        {" "}
                        <td></td>
                        <td></td>{" "}
                    </tr>
                    <tr>
                        {" "}
                        <th id="apayao" className="province-title" colspan="2">
                            {" "}
                            APAYAO{" "}
                        </th>{" "}
                    </tr>
                    <tr>
                        {" "}
                        <td></td>
                        <td></td>{" "}
                    </tr>
                    <tr>
                        {" "}
                        <td className="mun-title" colspan="2">
                            {" "}
                            MUNICIPALITY: CALANASAN{" "}
                        </td>{" "}
                    </tr>
                    <tr>
                        <td> Local Government Unit </td>
                        <td>+639178782280 </td>
                    </tr>
                    <tr>
                        <td>RURAL HEALTH UNIT </td>
                        <td> +639171234489</td>
                    </tr>
                    <tr>
                        <td>Covid-19 Testing and Swabbing Center </td>
                        <td>+639171234489 </td>
                    </tr>
                    <tr>
                        <td>
                            {" "}
                            Temporary Treatment and Monitoring Facility (TTMF)
                        </td>
                        <td>+639368474735 </td>
                    </tr>
                    <tr>
                        <td>APAYAO DISTRICT HOPITAL </td>
                        <td>+639353581439/ +639277677632 </td>
                    </tr>
                    <tr>
                        <td> Telemedicine Service Provider</td>
                        <td>+639353581439 </td>
                    </tr>
                    <tr>
                        <td> LOCAL EMERGENCY OPERATIONS CENTER/ MDRRMO</td>
                        <td> +639067701208/ +639971052994</td>
                    </tr>
                    <tr>
                        {" "}
                        <td className="mun-title" colspan="2">
                            {" "}
                            MUNICIPALITY: FLORA{" "}
                        </td>{" "}
                    </tr>
                    <tr>
                        <td> RURAL HEALTH UNIT </td>
                        <td> +639177918968 </td>
                    </tr>
                    <tr>
                        <td> Covid-19 Testing and Swabbing Center </td>
                        <td> +639177918968 </td>
                    </tr>
                    <tr>
                        <td>
                            {" "}
                            Temporary Treatment and Monitoring Facility (TTMF){" "}
                        </td>
                        <td> +639177918968 </td>
                    </tr>
                    <tr>
                        <td> FLORA DISTRICT HOSPITAL </td>
                        <td> +639287301508 </td>
                    </tr>
                    <tr>
                        <td> Telemedicine Service Provider </td>
                        <td> +639287301508 </td>
                    </tr>
                    <tr>
                        <td> LOCAL EMERGENCY OPERATIONS CENTER/ MDRRMO </td>
                        <td> +639079843891 </td>
                    </tr>
                    <tr>
                        {" "}
                        <td className="mun-title" colspan="2">
                            {" "}
                            MUNICIPALITY: KABUGAO{" "}
                        </td>{" "}
                    </tr>
                    <tr>
                        <td> Local Government Unit </td>
                        <td> +639953182818 </td>
                    </tr>
                    <tr>
                        <td> RURAL HEALTH UNIT </td>
                        <td> +639050417278</td>
                    </tr>
                    <tr>
                        <td> Covid-19 Testing and Swabbing Center </td>
                        <td> +639050417278 </td>
                    </tr>
                    <tr>
                        <td>
                            Temporary Treatment and Monitoring Facility (TTMF){" "}
                        </td>
                        <td> +639050417278 </td>
                    </tr>
                    <tr>
                        <td> APAYAO PROVINCIAL HOSPITAL </td>
                        <td> +639457715427 </td>
                    </tr>
                    <tr>
                        <td> Telemedicine Service Provider </td>
                        <td>+639457715427 </td>
                    </tr>
                    <tr>
                        <td>LOCAL EMERGENCY OPERATIONS CENTER/ MDRRMO </td>
                        <td> +639953182818 </td>
                    </tr>
                    <tr>
                        {" "}
                        <td className="mun-title" colspan="2">
                            {" "}
                            MUNICIPALITY: LUNA{" "}
                        </td>{" "}
                    </tr>
                    <tr>
                        <td> Local Government Unit </td>
                        <td>+639667810692 </td>
                    </tr>
                    <tr>
                        <td>RURAL HEALTH UNIT </td>
                        <td>+639057992922</td>
                    </tr>
                    <tr>
                        <td>Covid-19 Testing and Swabbing Center </td>
                        <td>+639057992922</td>
                    </tr>
                    <tr>
                        <td>
                            {" "}
                            Temporary Treatment and Monitoring Facility (TTMF)
                        </td>
                        <td>"+639666448508/ +639057902488 "</td>
                    </tr>
                    <tr>
                        <td>
                            {" "}
                            FAR NORTH LUZON GENERAL HOSPITAL AND TRAINING CENTER
                        </td>
                        <td>+639167081670</td>
                    </tr>
                    <tr>
                        <td>Telemedicine Service Provider </td>
                        <td>+639167081670</td>
                    </tr>
                    <tr>
                        <td>LOCAL EMERGENCY OPERATIONS CENTER/ MDRRMO </td>
                        <td>
                            "MDRRM:+639051906462 PDRRM:+639497154090/
                            +639057593779"
                        </td>
                    </tr>
                    <tr>
                        {" "}
                        <td className="mun-title" colspan="2">
                            {" "}
                            MUNICIPALITY: PUDTOL{" "}
                        </td>{" "}
                    </tr>
                    <tr>
                        <td>RURAL HEALTH UNIT </td>
                        <td>+639558308581</td>
                    </tr>
                    <tr>
                        <td>Covid-19 Testing and Swabbing Center </td>
                        <td>+639753255669</td>
                    </tr>
                    <tr>
                        <td>
                            Temporary Treatment and Monitoring Facility (TTMF)/
                            Municipal Quarantine Facility (MQF){" "}
                        </td>
                        <td>+639558308581</td>
                    </tr>
                    <tr>
                        <td> AMMA JADSAC DISTRICT HOSPITAL</td>
                        <td>
                            "CP # (ER: NON- COVID): +639976673552 CP # (COVID
                            Ward): +639064110644"
                        </td>
                    </tr>
                    <tr>
                        <td>Telemedicine Service Provider </td>
                        <td>+639976673552</td>
                    </tr>
                    <tr>
                        <td> LOCAL EMERGENCY OPERATIONS CENTER/ MDRRMO</td>
                        <td>639656519272</td>
                    </tr>
                    <tr>
                        {" "}
                        <td className="mun-title" colspan="2">
                            {" "}
                            MUNICIPALITY: STA. MARCELA{" "}
                        </td>{" "}
                    </tr>
                    <tr>
                        <td>Local Government Unit </td>
                        <td>+639178864578</td>
                    </tr>
                    <tr>
                        <td>RURAL HEALTH UNIT </td>
                        <td>+639615761702</td>
                    </tr>
                    <tr>
                        <td> Covid-19 Testing and Swabbing Center</td>
                        <td>+639615761702</td>
                    </tr>
                    <tr>
                        <td>
                            {" "}
                            Temporary Treatment and Monitoring Facility (TTMF)
                        </td>
                        <td>+639615761702</td>
                    </tr>
                    <tr>
                        <td>STA. MARCELA DISTRICT HOSPITAL </td>
                        <td>"+639971068546/ +639069165786"</td>
                    </tr>
                    <tr>
                        <td>Telemedicine Service Provider </td>
                        <td>+639971068546 </td>
                    </tr>
                    <tr>
                        <td>LOCAL EMERGENCY OPERATIONS CENTER/ MDRRMO </td>
                        <td> +639958524502</td>
                    </tr>
                    <tr>
                        {" "}
                        <td></td>
                        <td></td>{" "}
                    </tr>
                    <tr>
                        {" "}
                        <th id="benguet" className="province-title" colspan="2">
                            {" "}
                            BENGUET{" "}
                        </th>{" "}
                    </tr>
                    <tr>
                        {" "}
                        <td></td>
                        <td></td>{" "}
                    </tr>
                    <tr>
                        <td>Mayors Office</td>
                        <td> 0939-454-9605</td>
                    </tr>
                    <tr>
                        <td>Provincial Governor's Office</td>
                        <td>(074) 422 2004</td>
                    </tr>
                    <tr>
                        <td>PHO-Benguet</td>
                        <td>(074)-422-2895</td>
                    </tr>
                    <tr>
                        <td>PDOHO-Benguet</td>
                        <td>(074)-422-2895</td>
                    </tr>

                    <tr>
                        {" "}
                        <td className="mun-title" colspan="2">
                            {" "}
                            MUNICIPALITY: ATOK{" "}
                        </td>{" "}
                    </tr>
                    <tr>
                        <td>Mayors Office</td>
                        <td> 0939-454-9605</td>
                    </tr>
                    <tr>
                        <td> MDRRMO/Emergency Operation Center</td>
                        <td> 0907-010-2240</td>
                    </tr>
                    <tr>
                        <td>MHO/Swabbing Facility</td>
                        <td>0998-467-4411</td>
                    </tr>
                    <tr>
                        <td>Atok District Hospital</td>
                        <td>0920-950-7875</td>
                    </tr>
                    <tr>
                        {" "}
                        <td className="mun-title" colspan="2">
                            {" "}
                            MUNICIPALITY: BAKUN{" "}
                        </td>{" "}
                    </tr>
                    <tr>
                        <td> Mayors Office</td>
                        <td> 0948-075-2984</td>
                    </tr>
                    <tr>
                        <td>MDRRMO/Emergency Operation Center</td>
                        <td>0966-264-1458</td>
                    </tr>
                    <tr>
                        <td>MHO/Swabbing Facility</td>
                        <td>0917-182-9066 0918-389-6979</td>
                    </tr>
                    <tr>
                        {" "}
                        <td className="mun-title" colspan="2">
                            {" "}
                            MUNICIPALITY: BOKOD{" "}
                        </td>{" "}
                    </tr>
                    <tr>
                        <td> Mayors Office</td>
                        <td>0946-254-5194</td>
                    </tr>
                    <tr>
                        <td>MDRRMO/Emergency Operation Center</td>
                        <td> 0910-527-4776 0915-071-3348</td>
                    </tr>
                    <tr>
                        <td>MHO/Swabbing Facility </td>
                        <td>0948-232-4042 </td>
                    </tr>
                    <tr>
                        <td> Dennis Molintas District Hospital</td>
                        <td>0926-749-8380 </td>
                    </tr>
                    <tr>
                        {" "}
                        <td className="mun-title" colspan="2">
                            {" "}
                            MUNICIPALITY: BUGUIAS{" "}
                        </td>{" "}
                    </tr>
                    <tr>
                        <td>Mayors Office</td>
                        <td>0951-350-7413</td>
                    </tr>
                    <tr>
                        <td> MDRRMO/Emergency Operation Center</td>
                        <td>0920-543-7557 0921-640-9504 </td>
                    </tr>
                    <tr>
                        <td>MHO/Swabbing Facility</td>
                        <td>0921-977-4110</td>
                    </tr>
                    <tr>
                        <td>Northern Benguet District Hospital</td>
                        <td> 0930-455-9926</td>
                    </tr>
                    <tr>
                        <td>Lutheran Hospital Incorporated</td>
                        <td> 0917-823-0974</td>
                    </tr>
                    <tr>
                        {" "}
                        <td className="mun-title" colspan="2">
                            {" "}
                            MUNICIPALITY: ITOGON{" "}
                        </td>{" "}
                    </tr>
                    <tr>
                        <td>EOC/MDRRMO</td>
                        <td>09298629895</td>
                    </tr>
                    <tr>
                        <td>MHO/Swabbing Facility</td>
                        <td>09460563173</td>
                    </tr>
                    <tr>
                        <td> Itogon District Hospital</td>
                        <td> 0951706935</td>
                    </tr>
                    <tr>
                        {" "}
                        <td className="mun-title" colspan="2">
                            {" "}
                            MUNICIPALITY: KABAYAN{" "}
                        </td>{" "}
                    </tr>
                    <tr>
                        <td>Mayor's Office</td>
                        <td> 09183055860</td>
                    </tr>
                    <tr>
                        <td>EOC/MDRRMO</td>
                        <td>09666247958</td>
                    </tr>
                    <tr>
                        <td>MHO/Swabbing Facility</td>
                        <td>09662809852</td>
                    </tr>
                    <tr>
                        {" "}
                        <td className="mun-title" colspan="2">
                            {" "}
                            MUNICIPALITY: KAPANGAN{" "}
                        </td>{" "}
                    </tr>
                    <tr>
                        <td>Mayor's Office</td>
                        <td>09189420527</td>
                    </tr>
                    <tr>
                        <td> EOC/MDRRMO</td>
                        <td>09074436306</td>
                    </tr>
                    <tr>
                        <td>MHO/Swabbing Facility</td>
                        <td>09209064723</td>
                    </tr>
                    <tr>
                        <td>Kapangan District Hospital</td>
                        <td>09212322823</td>
                    </tr>
                    <tr>
                        {" "}
                        <td className="mun-title" colspan="2">
                            {" "}
                            MUNICIPALITY: KIBUNGAN{" "}
                        </td>{" "}
                    </tr>
                    <tr>
                        <td>Mayors Office</td>
                        <td>0966-281-3226</td>
                    </tr>
                    <tr>
                        <td>MDRRMO/Emergency Operation Center</td>
                        <td>0919-659-6043 0945-422-6516</td>
                    </tr>
                    <tr>
                        <td>MHO/Swabbing Facility</td>
                        <td>0909-391-0206</td>
                    </tr>
                    <tr>
                        {" "}
                        <td className="mun-title" colspan="2">
                            {" "}
                            MUNICIPALITY: LA TRINIDAD{" "}
                        </td>{" "}
                    </tr>
                    <tr>
                        <td>Mayor's Office </td>
                        <td>(074) 422-2601 (074) 422-5621 </td>
                    </tr>
                    <tr>
                        <td>Emergency Operation Center </td>
                        <td>
                            Smart-09207296516/09303161388 Globe- 09669178342
                        </td>
                    </tr>
                    <tr>
                        <td>MDRRMO </td>
                        <td> 09399900789</td>
                    </tr>
                    <tr>
                        <td> Cordillera Hospital of the Divine Grace</td>
                        <td>620-5692</td>
                    </tr>
                    <tr>
                        <td>Benguet General Hospital</td>
                        <td>422-4722</td>
                    </tr>
                    <tr>
                        <td>Benguet Molecular Lab </td>
                        <td> (074) 422-4722-24/ 422-5506</td>
                    </tr>
                    <tr>
                        <td>Camp Bado Dangwa Hospital</td>
                        <td>09260396156</td>
                    </tr>
                    <tr>
                        {" "}
                        <td className="mun-title" colspan="2">
                            {" "}
                            MUNICIPALITY: MANKAYAN{" "}
                        </td>{" "}
                    </tr>
                    <tr>
                        <td> EOC/MDRRMO</td>
                        <td> 09081113327</td>
                    </tr>
                    <tr>
                        <td>MHO/Swabbing Facility</td>
                        <td> 09618085820</td>
                    </tr>
                    <tr>
                        <td> Lepanto Consolidated Mining Company</td>
                        <td> 09213143503</td>
                    </tr>
                    <tr>
                        {" "}
                        <td className="mun-title" colspan="2">
                            {" "}
                            MUNICIPALITY: SABLAN{" "}
                        </td>{" "}
                    </tr>
                    <tr>
                        <td> Mayor's Office </td>
                        <td> 309-6400 </td>
                    </tr>
                    <tr>
                        <td> Emergency Operation Center/MDRRMO </td>
                        <td> 309-9235 / 309-9232 </td>
                    </tr>
                    <tr>
                        <td> MHO/ Swabbing Facility </td>
                        <td> 309-9232 </td>
                    </tr>
                    <tr>
                        {" "}
                        <td className="mun-title" colspan="2">
                            {" "}
                            MUNICIPALITY: TUBA{" "}
                        </td>{" "}
                    </tr>
                    <tr>
                        <td> Mayor's Office </td>
                        <td> 447-0064 </td>
                    </tr>
                    <tr>
                        <td> Emergency Operation Center/MDRRMO </td>
                        <td> 422-8890 </td>
                    </tr>
                    <tr>
                        <td> MHO/ Swabbing Facility </td>
                        <td> 424-3058 </td>
                    </tr>
                    <tr>
                        <td> Sto. Nino Hospital</td>
                        <td> 0999 992 6307</td>
                    </tr>
                    <tr>
                        {" "}
                        <td className="mun-title" colspan="2">
                            {" "}
                            MUNICIPALITY: TUBLAY{" "}
                        </td>{" "}
                    </tr>
                    <tr>
                        <td> Mayor's Office </td>
                        <td> 4241172 </td>
                    </tr>
                    <tr>
                        <td> Emergency Operation Center/MDRRMO </td>
                        <td> 4241172 </td>
                    </tr>
                    <tr>
                        <td> MHO/ Swabbing Facility </td>
                        <td> 4242665 </td>
                    </tr>
                    <tr>
                        <td>
                            {" "}
                            Divine Providence Infirmary and Diagnostic Center{" "}
                        </td>
                        <td> 09207295946 </td>
                    </tr>
                    <tr>
                        {" "}
                        <th id="ifugao" className="province-title" colspan="2">
                            {" "}
                            IFUGAO{" "}
                        </th>{" "}
                    </tr>
                    <tr>
                        <td> AGUINALDO </td>
                        <td> 0997-170-1390 0935-350-1038 </td>
                    </tr>
                    <tr>
                        <td> A. LISTA</td>
                        <td> 0917-843-9795 0935-4322-695/0915-139-2118 </td>
                    </tr>
                    <tr>
                        <td> ASIPULO</td>
                        <td> 0977-833-1723 0997-321-4005 </td>
                    </tr>
                    <tr>
                        <td> BANAUE</td>
                        <td> 0917-843-9795 0935-4322-695/0915-139-2118 </td>
                    </tr>
                    <tr>
                        <td> ASIPULO</td>
                        <td> 0977-833-1723 0997-321-4005 </td>
                    </tr>
                    <tr>
                        <td>BANAUE</td>
                        <td>BANAUE</td>
                    </tr>
                    <tr>
                        <td>KIANGAN</td>
                        <td> 0917-309-6137 0916-621-6918 </td>
                    </tr>
                    <tr>
                        <td> HINGYON</td>
                        <td> 0953-300-5413 0955-481-1139 0997-895-3306 </td>
                    </tr>
                    <tr>
                        <td> HUNGDUAN</td>
                        <td>0956-041-2834 0917-186-0258 0906-751-4701 </td>
                    </tr>
                    <tr>
                        <td>LAGAWE</td>
                        <td> 0956-612-5463 0956-514-7453 0905-692-0572 </td>
                    </tr>
                    <tr>
                        <td> LAMUT</td>
                        <td>
                            {" "}
                            0935-242-5224 0995-390-4009 0956-047-8819
                            0915-955-9876{" "}
                        </td>
                    </tr>
                    <tr>
                        <td>MAYOYAO</td>
                        <td>
                            0997-257-333/ 0948-826-2384 0906-202-5327
                            0916-985-8492{" "}
                        </td>
                    </tr>
                    <tr>
                        <td> TINOC</td>
                        <td>
                            {" "}
                            0977-6508-427/0905-18 15-182
                            0927-9955-213/0995-3170-655{" "}
                        </td>
                    </tr>
                    <tr>
                        <td> AGUINALDO PEOPLE’S HOSPITAL</td>
                        <td> 0917-5781-424 </td>
                    </tr>
                    <tr>
                        <td> GOOD NEWS CLINIC AND HOSPITAL</td>
                        <td> 0916-913-4433 </td>
                    </tr>
                    <tr>
                        <td> "HUNGDUAN DISTRICT HOSPITAL (HDH) "</td>
                        <td> "0906-338-1620 0997-3682-610" </td>
                    </tr>
                    <tr>
                        <td> "IFUGAO GENERAL HOSPITAL (IGH) "</td>
                        <td> 0917-563-1447 0926-7087-171 </td>
                    </tr>
                    <tr>
                        <td> MAYOYAO DISTRICT HOSPITAL</td>
                        <td>0917-5024-983 </td>
                    </tr>
                    <tr>
                        <td> " PANOPDOPAN DISTRICT HOSPITAL "</td>
                        <td> 0926-7087-171 </td>
                    </tr>
                    <tr>
                        <td>TINOC DISTRICT HOSPITAL </td>
                        <td> 0915-2091-158 </td>
                    </tr>

                    <tr>
                        {" "}
                        <td></td>
                        <td></td>{" "}
                    </tr>
                    <tr>
                        {" "}
                        <th id="kalinga" className="province-title" colspan="2">
                            {" "}
                            KALINGA{" "}
                        </th>{" "}
                    </tr>

                    <tr>
                        <td> Balbalan </td>
                        <td>0955-369-9261 0936-067-0548 / 0949-744-3945 </td>
                    </tr>
                    <tr>
                        <td>Lubuagan </td>
                        <td> 0917-576-3912 0927-685-845 </td>
                    </tr>
                    <tr>
                        <td> Pasil </td>
                        <td> 0997-630-2326 0935-182-7635 </td>
                    </tr>
                    <tr>
                        <td> Tabuk </td>
                        <td>
                            {" "}
                            0917-148-0019 0916-361-1148 0926-656-7120/
                            0908-814-2340 0921-327-5975 0906-438-4715
                            0999-924-950 0927-663-2582 0998-984-9739
                            0920-913-4987/ (074)-872-2042{" "}
                        </td>
                    </tr>

                    <tr>
                        {" "}
                        <th
                            id="mt-province"
                            className="province-title"
                            colspan="2"
                        >
                            {" "}
                            MT. PROVINCE{" "}
                        </th>{" "}
                    </tr>
                    <tr>
                        <td> MOUNTAIN PROVINCE DEPARTMENT OF HEALTH OFFICE</td>
                        <td> 09273551139 / 09398148289 </td>
                    </tr>
                    <tr>
                        <td> MOUNTAIN PROVINCE PROVINCIAL HEALTH OFFICE</td>
                        <td> 09273551139 / 09398148289 </td>
                    </tr>
                    <tr>
                        <td> BARLIG DISTRICT HOSPITAL</td>
                        <td> 9663374315 </td>
                    </tr>
                    <tr>
                        <td> LUIS HORA MEMORIAL REGIONAL HOSPITAL</td>
                        <td> 9219779296 </td>
                    </tr>
                    <tr>
                        <td> BESAO DISTRICT HOSPITAL</td>
                        <td> 09509568300 </td>
                    </tr>
                    <tr>
                        <td> BONTOC GENERAL HOSPITAL</td>
                        <td> 9184373852 </td>
                    </tr>
                    <tr>
                        <td>
                            {" "}
                            ANASTACIA RAFAEL SAGEL MEMORIAL HOSPITAL (ARSMH)
                        </td>
                        <td> 9128614729 </td>
                    </tr>
                    <tr>
                        <td> PARACELIS DISTRICT HOSPITAL</td>
                        <td> 9209604047 </td>
                    </tr>
                    <tr>
                        <td> SAINT THEODORE HOSPITAL (STH)</td>
                        <td> 9209604047 </td>
                    </tr>
                    <tr>
                        <td> SAINT THEODORE HOSPITAL (STH)</td>
                        <td> 9175026466 </td>
                    </tr>
                    <tr>
                        <td>
                            {" "}
                            MOUNTAIN PROVINCE COVID 19 TESTING AND SWABBING
                            CENTER
                        </td>
                        <td> 09182149980 </td>
                    </tr>
                    <tr>
                        <td>
                            {" "}
                            BARLIG RHU COVID 19 TESTING AND SWABBING CENTER
                        </td>
                        <td> 9957223294 </td>
                    </tr>
                    <tr>
                        <td> BAUKO RHU COVID 19 TESTING AND SWABBING CENTER</td>
                        <td> 09296807570 </td>
                    </tr>
                    <tr>
                        <td> BESAO RHU COVID 19 TESTING AND SWABBING CENTER</td>
                        <td> 9123003979 </td>
                    </tr>
                    <tr>
                        <td>
                            {" "}
                            BONTOC RHU COVID 19 TESTING AND SWABBING CENTER
                        </td>
                        <td> 9605831333 </td>
                    </tr>
                    <tr>
                        <td> NATONIN COVID 19 TESTING AND SWABBING CENTER</td>
                        <td> 09177980688, 09495805129 </td>
                    </tr>
                    <tr>
                        <td> PARACELIS COVID 19 TESTING AND SWABBING CENTER</td>
                        <td> 9171341808 </td>
                    </tr>
                    <tr>
                        <td>
                            {" "}
                            SABANGAN RHU COVID 19 TESTING AND SWABBING CENTER
                        </td>
                        <td> 9207255730 </td>
                    </tr>
                    <tr>
                        <td>
                            {" "}
                            SADANGA RHU COVID 19 TESTING AND SWABBING CENTER
                        </td>
                        <td> 09057530019 </td>
                    </tr>
                    <tr>
                        <td>
                            {" "}
                            SAGADA RHU COVID 19 TESTING AND SWABBING CENTER
                        </td>
                        <td> 09260334134 </td>
                    </tr>
                    <tr>
                        <td>
                            {" "}
                            TADIAN RHU COVID 19 TESTING AND SWABBING CENTER
                        </td>
                        <td> 9203430123 </td>
                    </tr>
                    <tr>
                        <td> </td>
                        <td> </td>
                    </tr>
                </tbody>
            </table>
            <div className="reference">
                <p>
                    view on pdf:{" "}
                    <a
                        href="https://docs.google.com/spreadsheets/d/1Somp_33ZtaQw-vkBOtAt1vjjm1xUwVB0_hW5wkuXjJo/edit#gid=1284027659 "
                        target="_blank"
                    >
                        Emergency directories{" "}
                    </a>
                    <br />
                    source:
                    <a
                        href="https://caro.doh.gov.ph/cordillera-emergency-directory/"
                        target="_blank"
                    >
                        {" "}
                        https://caro.doh.gov.ph/cordillera-emergency-directory/{" "}
                    </a>
                    <p> last update: 12/06/2022 - tde Life Saver </p>
                </p>
            </div>
        </div>
    );
};

export default Contacts;
